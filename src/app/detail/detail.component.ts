import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Rx';
import { AngularFire } from 'angularfire2';

import { ToDo } from './todo.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit, OnDestroy {
  private value: FirebaseObjectObservable<any>;
  private values: FirebaseListObservable<Array<any>>;
  user = JSON.parse(localStorage.getItem('user'));
  subscription: Subscription;
  list: any = {
    status: 'public',
    groupTask: '',
    userId: this.user.userId,
    detail: []
  };
  todos: Array<ToDo> = [];
  todo: ToDo;
  id: string;
  isLoad: boolean;

  constructor(private angularFire: AngularFire,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.todo = new ToDo();
    this.todo.state = false;
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.value = this.angularFire.database.object(`to-do-list/${this.id}`);
      this.isLoad = true;
      this.subscription = this.value.subscribe((result: any) => {
        if (result.userId !== this.user.userId && result.status === 'private') {
          return;
        }
        this.list = result;
        this.todos = this.list.detail || [];
        this.isLoad = false;
      });
    } else {
      this.values = this.angularFire.database.list('to-do-list');
    }
  }

  ngOnDestroy() {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  checkToDo() {
    this.saveWithDetail();
  }

  saveToDo() {
    if (!this.list.detail) {
      this.list.detail = [];
    }
    this.saveWithDetail(this.todo);
  }

  private saveWithDetail(todo?: ToDo) {
    if (todo) {
      this.list.detail.push(todo);
    }
    let updatedList = Object.assign({}, this.list);
    delete updatedList.$key;
    delete updatedList.$exists;
    this.value.set(updatedList);
  }

  saveGroupTask() {
    if (this.values) {
      this.values.push(this.list);
      this.router.navigateByUrl('home');
      return;
    }
    this.saveWithDetail();
  }

}

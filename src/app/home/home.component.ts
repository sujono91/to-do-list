import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs/Rx';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  todoList: Array<any> = [];
  isLoad = true;
  user = JSON.parse(localStorage.getItem('user'));

  constructor(private angularFire: AngularFire,
    private router: Router) { }

  ngOnInit() {
    this.subscription = this.angularFire.database.list('to-do-list')
      .subscribe((result: Array<any>) => {
        this.todoList = result;
        this.todoList = this.todoList.filter((r: any) => {
          return (r.status === 'private' && r.userId === this.user.userId)
            || r.status === 'public';
        });
        this.isLoad = false;
      });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  edit(index: number) {
    this.router.navigateByUrl(`home/edit/${index}`);
  }

  add() {
    this.router.navigateByUrl('home/add');
  }

}

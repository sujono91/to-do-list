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
  private subscription: Subscription;
  todoList: Array<any> = [];
  isLoad: boolean = true;
  user = JSON.parse(localStorage.getItem('user'));

  constructor(private angularFire: AngularFire,
    private router: Router) { }

  ngOnInit() {
    this.angularFire.database.list('to-do-list')
      .subscribe((result: Array<any>) => {
        this.todoList = result;
        this.todoList = this.todoList.filter((result: any) => {
          return (result.status === 'private' && result.userId === this.user.userId)
            || result.status === 'public';
        });
        this.isLoad = false;
      });
  }

  ngOnDestroy() {
  }

  edit(index: number) {
    this.router.navigateByUrl(`home/edit/${index}`);
  }

  add() {
    this.router.navigateByUrl('home/add');
  }

}

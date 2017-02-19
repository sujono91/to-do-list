import { AuthMethods } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { AngularFire, AuthProviders } from 'angularfire2';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  private subscription: Subscription;

  constructor(
    private router: Router,
    private af: AngularFire
  ) {
    this.subscription = this.af.auth.subscribe(
      user => this.changeState(user),
      error => console.trace(error)
    );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  login() {
    this.af.auth.login({
      provider: AuthProviders.Google
    });
  }

  private changeState(user: any = null) {
    if (user) {
      localStorage.setItem('user', JSON.stringify(
        Object.assign({}, {
          userId: user.uid
        }, user.auth.providerData[0])
      ));
      this.router.navigateByUrl('home');
    }
  }
}

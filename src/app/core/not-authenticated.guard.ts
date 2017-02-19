import { CanLoad, Router, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class NotAuthenticatedGuard implements CanActivate {
  constructor(private router: Router) { }
  user = JSON.parse(localStorage.getItem('user'));

  canActivate() {
    if (this.user) {
      this.router.navigateByUrl('home');
      return false;
    }
    return true;
  }
}

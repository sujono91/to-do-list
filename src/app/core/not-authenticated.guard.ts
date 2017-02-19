import { CanLoad, Router, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class NotAuthenticatedGuard implements CanActivate {
  user = JSON.parse(localStorage.getItem('user'));
  constructor(private router: Router) { }

  canActivate() {
    if (this.user) {
      this.router.navigateByUrl('home');
      return false;
    }
    return true;
  }
}

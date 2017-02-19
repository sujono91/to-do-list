import { CanActivate, CanLoad, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticatedGuard implements CanActivate {
  constructor(private router: Router) { }
  user = JSON.parse(localStorage.getItem('user'));

  canActivate() {
    if (!this.user) {
      this.router.navigateByUrl('login');
      return false;
    }
    return true;
  }
}

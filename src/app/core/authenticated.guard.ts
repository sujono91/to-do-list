import { CanActivate, CanLoad, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticatedGuard implements CanActivate {
  user = JSON.parse(localStorage.getItem('user'));
  constructor(private router: Router) { }

  canActivate() {
    if (!this.user) {
      this.router.navigateByUrl('login');
      return false;
    }
    return true;
  }
}

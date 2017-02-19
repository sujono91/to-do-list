import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { AngularFire } from 'angularfire2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user = JSON.parse(localStorage.getItem('user'));

  constructor(private angularFire: AngularFire,
  private router: Router) { }

  ngOnInit() {
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('login');
    this.angularFire.auth.logout();
  }

  goToHome() {
    this.router.navigateByUrl('home');
  }

}

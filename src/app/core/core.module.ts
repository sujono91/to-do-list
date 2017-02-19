import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NotAuthenticatedGuard } from './not-authenticated.guard';
import { AuthenticatedGuard } from './authenticated.guard';
import {
  AngularFireModule,
  AuthMethods,
  AuthProviders
} from "angularfire2";

const firebaseConfig = {
  apiKey: "AIzaSyDHmfFvjh0Qq5lEEcsr1PhgjewHV25D_SQ",
  authDomain: "to-do-list-5dc91.firebaseapp.com",
  databaseURL: "https://to-do-list-5dc91.firebaseio.com",
  storageBucket: "to-do-list-5dc91.appspot.com"
};

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, {
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    })
  ],
  providers: [
    NotAuthenticatedGuard,
    AuthenticatedGuard
  ],
  exports: [
    BrowserModule
  ]
})
export class CoreModule { }

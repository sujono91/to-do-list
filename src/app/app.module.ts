import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app.routing.module';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    CoreModule,
    SharedModule
  ],
  exports: [CoreModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

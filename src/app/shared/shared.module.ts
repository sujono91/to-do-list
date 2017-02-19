import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [CommonModule],
  exports: [CommonModule, NavbarComponent],
  declarations: [NavbarComponent]
})
export class SharedModule { }

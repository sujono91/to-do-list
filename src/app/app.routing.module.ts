import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { NotAuthenticatedGuard } from './core/not-authenticated.guard';
import { AuthenticatedGuard } from './core/authenticated.guard';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [NotAuthenticatedGuard]
  },
  {
    path: 'home',
    canActivate: [AuthenticatedGuard],
    children: [
      { path: '', component: HomeComponent },
      {
        path: 'add',
        component: DetailComponent
      },
      {
        path: 'edit/:id',
        component: DetailComponent
      }
    ]
  }
];

const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
  preloadingStrategy: PreloadAllModules
});

@NgModule({
  imports: [routing],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ModuleWithProviders, NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: 'app/login/login.module#LoginModule'
  },
  {
    path: 'home',
    loadChildren: 'app/home/dashboard.module#DashboardModule'
  }
];

const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
  preloadingStrategy: PreloadAllModules
});

@NgModule({
  imports: [routing],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginShellComponent } from './modules/auth/pages/login-shell/login-shell.component';
import { SignupShellComponent } from './modules/auth/pages/signup-shell/signup-shell.component';
import { AuthGuard } from './modules/core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginShellComponent,
  },
  {
    path: 'signup',
    component: SignupShellComponent,
  },
  {
    path: 'users',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./modules/users/users.module').then(
        (module) => module.UsersModule
      ),
  },
  {
    path: 'vehicles',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./modules/vehicles/vehicles.module').then(
        (module) => module.VehiclesModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

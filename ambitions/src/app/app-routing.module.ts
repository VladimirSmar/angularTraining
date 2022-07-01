import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginShellComponent } from './modules/auth/pages/login-shell/login-shell.component';
import { SignupShellComponent } from './modules/auth/pages/signup-shell/signup-shell.component';
import { AuthGuard } from './modules/core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginShellComponent,
  },
  {
    path: 'signup',
    component: SignupShellComponent,
  },
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'users',
        loadChildren: () =>
          import('./modules/users/users.module').then(
            (module) => module.UsersModule
          ),
      },
      {
        path: 'vehicles',
        loadChildren: () =>
          import('./modules/vehicles/vehicles.module').then(
            (module) => module.VehiclesModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

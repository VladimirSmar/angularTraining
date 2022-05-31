import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AddUserShellComponent } from './modules/users/pages/add-user-shell/add-user-shell.component';
import { UsersListShellComponent } from './modules/users/pages/users-list-shell/users-list-shell.component';
import { VehiclesListShellComponent } from './modules/vehicles/pages/vehicles-list-shell/vehicles-list-shell.component';

const routes: Routes = [
  {
    path: '',
    component: UsersListShellComponent,
  },
  {
    path: 'users',
    component: UsersListShellComponent,
  },
  {
    path: 'vehicles',
    component: VehiclesListShellComponent,
  },
  {
    path: 'addNewUser',
    component: AddUserShellComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

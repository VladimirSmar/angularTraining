import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LeaveEditUserGuard } from './modules/core/guards/leave-edit-user.guard';

import { AddUserShellComponent } from './modules/users/pages/add-user-shell/add-user-shell.component';
import { EditUserShellComponent } from './modules/users/pages/edit-user-shell/edit-user-shell.component';
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
    path: 'users/add',
    component: AddUserShellComponent,
  },
  {
    path: 'users/edit/:pageIndex/:id',
    component: EditUserShellComponent,
    canDeactivate: [LeaveEditUserGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

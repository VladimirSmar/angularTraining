import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeaveEditUserGuard } from '../core/guards/leave-edit-user.guard';
import { AddUserShellComponent } from './pages/add-user-shell/add-user-shell.component';
import { EditUserShellComponent } from './pages/edit-user-shell/edit-user-shell.component';

import { UsersListShellComponent } from './pages/users-list-shell/users-list-shell.component';

const routes: Routes = [
  {
    path: '',
    component: UsersListShellComponent,
  },
  {
    path: 'add',
    component: AddUserShellComponent,
  },
  {
    path: 'edit/:pageIndex/:id',
    component: EditUserShellComponent,
    canDeactivate: [LeaveEditUserGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}

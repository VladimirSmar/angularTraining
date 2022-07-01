import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersListShellComponent } from './pages/users-list-shell/users-list-shell.component';

const routes: Routes = [
  {
    path: '',
    component: UsersListShellComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}

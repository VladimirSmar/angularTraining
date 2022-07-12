import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServerTableShellComponent } from './pages/server-table-shell/server-table-shell.component';
import { UiTableShellComponent } from './pages/ui-table-shell/ui-table-shell.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'uiTable',
  },
  {
    path: 'uiTable',
    component: UiTableShellComponent,
  },
  {
    path: 'serverTable',
    component: ServerTableShellComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersTableRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeaveEditUserGuard } from '../core/guards/leave-edit-user.guard';
import { CompanyInfoComponent } from './components/company-info/company-info.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { AddUserShellComponent } from './pages/add-user-shell/add-user-shell.component';
import { EditUserShellComponent } from './pages/edit-user-shell/edit-user-shell.component';
import { UserDetailsShellComponent } from './pages/user-details-shell/user-details-shell.component';

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
  {
    path: 'view/:pageIndex/:id',
    component: UserDetailsShellComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'company' },
      {
        path: 'company',
        component: CompanyInfoComponent,
      },
      { path: 'personal', component: PersonalInfoComponent },
      { path: 'contacts', component: ContactsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}

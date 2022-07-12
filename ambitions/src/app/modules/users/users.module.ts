import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UsersRoutingModule } from './users-routing.module';

import { CardModule } from '../shared/components/card/card.module';
import { FavoritesModule } from '../shared/components/favorites/favorites.module';
import { SearchModule } from '../shared/components/search/search.module';

import { UsersListComponent } from './components/users-list/users-list.component';
import { UsersListShellComponent } from './pages/users-list-shell/users-list-shell.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AddUserShellComponent } from './pages/add-user-shell/add-user-shell.component';
import { AddressComponent } from './components/address/address.component';
import { AddressesComponent } from './components/addresses/addresses.component';
import { EditUserShellComponent } from './pages/edit-user-shell/edit-user-shell.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { UserDetailsShellComponent } from './pages/user-details-shell/user-details-shell.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTabsModule } from '@angular/material/tabs';
import { CompanyInfoComponent } from './components/company-info/company-info.component';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { PipeModule } from '../shared/modules/pipe-module.module';

@NgModule({
  declarations: [
    UsersListComponent,
    UsersListShellComponent,
    AddUserComponent,
    AddUserShellComponent,
    AddressComponent,
    AddressesComponent,
    EditUserShellComponent,
    EditUserComponent,
    UserDetailsShellComponent,
    CompanyInfoComponent,
    PersonalInfoComponent,
    ContactsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    UsersRoutingModule,
    MatButtonModule,
    CardModule,
    FavoritesModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    SearchModule,
    MatPaginatorModule,
    MatTabsModule,
    PipeModule
  ],
  exports: [UsersListShellComponent],
})
export class UsersModule {}

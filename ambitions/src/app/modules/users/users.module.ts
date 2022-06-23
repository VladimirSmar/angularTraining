import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CardModule } from '../shared/components/card/card.module';
import { FavoritesModule } from '../shared/components/favorites/favorites.module';

import { UsersListComponent } from './components/users-list/users-list.component';
import { UsersListShellComponent } from './pages/users-list-shell/users-list-shell.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AddUserShellComponent } from './pages/add-user-shell/add-user-shell.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { AddressComponent } from './components/address/address.component';
import { AddressesComponent } from './components/addresses/addresses.component';
import { EditUserShellComponent } from './pages/edit-user-shell/edit-user-shell.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { SearchModule } from '../shared/components/search/search.module';

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
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    CardModule,
    FavoritesModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    SearchModule,
  ],
  exports: [UsersListShellComponent],
})
export class UsersModule {}

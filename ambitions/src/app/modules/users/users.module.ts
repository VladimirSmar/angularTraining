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

@NgModule({
  declarations: [
    UsersListComponent,
    UsersListShellComponent,
    AddUserComponent,
    AddUserShellComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    CardModule,
    FavoritesModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  exports: [UsersListShellComponent],
})
export class UsersModule {}

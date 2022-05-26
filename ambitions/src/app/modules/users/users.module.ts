import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UsersComponent } from './components/users.component';
import { UsersListComponent } from './pages/users-list/users-list.component';
import { UsersListShellComponent } from './pages/users-list-shell/users-list-shell.component';

import { CardModule } from '../shared/components/card/card.module';

import { MatButtonModule } from '@angular/material/button';
import { FavoritesModule } from '../shared/components/favorites/favorites.module';

@NgModule({
  declarations: [UsersComponent, UsersListComponent, UsersListShellComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    CardModule,
    FavoritesModule,
  ],
  exports: [UsersComponent],
})
export class UsersModule {}

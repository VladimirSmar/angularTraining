import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UsersComponent } from './users.component';

import { UserModule } from 'src/app/shared-modules/user/user.module';

import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [UsersComponent],
  imports: [CommonModule, FormsModule, UserModule, MatButtonModule],
  exports: [UsersComponent],
})
export class UsersModule {}

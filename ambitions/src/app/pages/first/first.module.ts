import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FirstComponent } from './first.component';

import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [FirstComponent],
  imports: [CommonModule, MatCardModule, FormsModule],
})
export class FirstModule {}

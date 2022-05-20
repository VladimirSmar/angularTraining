import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondComponent } from './second.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SecondComponent],
  imports: [CommonModule, FormsModule],
})
export class SecondModule {}

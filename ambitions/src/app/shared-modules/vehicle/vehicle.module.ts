import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { VehicleComponent } from './vehicle.component';

import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [VehicleComponent],
  imports: [CommonModule, FormsModule, MatCardModule],
  exports: [VehicleComponent],
})
export class VehicleModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { VehicleModule } from 'src/app/shared-modules/vehicle/vehicle.module';

import { VehiclesComponent } from './vehicles.component';

@NgModule({
  declarations: [VehiclesComponent],
  imports: [CommonModule, FormsModule, VehicleModule],
  exports: [VehiclesComponent],
})
export class VehiclesModule {}

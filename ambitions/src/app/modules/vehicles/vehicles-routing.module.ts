import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehiclesListShellComponent } from './pages/vehicles-list-shell/vehicles-list-shell.component';

const routes: Routes = [
  {
    path: '',
    component: VehiclesListShellComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehicleRoutingModule {}

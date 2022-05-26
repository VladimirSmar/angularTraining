import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { VehiclesComponent } from './components/vehicles.component';
import { VehiclesListComponent } from './pages/vehicles-list/vehicles-list.component';
import { VehiclesListShellComponent } from './pages/vehicles-list-shell/vehicles-list-shell.component';
import { CardModule } from '../shared/components/card/card.module';
import { FavoritesModule } from '../shared/components/favorites/favorites.module';

@NgModule({
  declarations: [
    VehiclesComponent,
    VehiclesListComponent,
    VehiclesListShellComponent,
  ],
  imports: [CommonModule, FormsModule, CardModule, FavoritesModule],
  exports: [VehiclesComponent],
})
export class VehiclesModule {}

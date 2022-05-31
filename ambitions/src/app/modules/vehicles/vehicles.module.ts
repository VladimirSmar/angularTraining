import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CardModule } from '../shared/components/card/card.module';
import { FavoritesModule } from '../shared/components/favorites/favorites.module';

import { VehiclesListComponent } from './components/vehicles-list/vehicles-list.component';
import { VehiclesListShellComponent } from './pages/vehicles-list-shell/vehicles-list-shell.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [VehiclesListComponent, VehiclesListShellComponent],
  imports: [
    CommonModule,
    FormsModule,
    CardModule,
    FavoritesModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [VehiclesListShellComponent],
})
export class VehiclesModule {}

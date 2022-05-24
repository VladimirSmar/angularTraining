import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UsersModule } from './pages/users/users.module';
import { UserModule } from './shared-modules/user/user.module';
import { VehicleModule } from './shared-modules/vehicle/vehicle.module';
import { VehiclesModule } from './pages/vehicles/vehicles.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UsersModule,
    UserModule,
    VehiclesModule,
    VehicleModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

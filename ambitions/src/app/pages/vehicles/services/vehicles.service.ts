import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VehiclesService {
  constructor() {}

  getVehiclesData() {
    return [
      {
        model: 'Yamaha',
        productionYear: 1985,
        price: 2000,
      },
      {
        model: 'Yoyota',
        productionYear: 2003,
        price: 20200,
      },
      {
        model: 'Korolla',
        productionYear: 2009,
        price: 50000,
      },
    ];
  }
}

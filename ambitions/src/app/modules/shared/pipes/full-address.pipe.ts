import { Pipe, PipeTransform } from '@angular/core';
import { IAddress } from '../../users/interfaces/address';

@Pipe({
  name: 'fullAddress'
})
export class FullAddressPipe implements PipeTransform {

  transform(addresses: IAddress[]): string {
    return `${addresses[0].addressLine}, ${addresses[0].city}, ${addresses[0].zip}`;
  }

}

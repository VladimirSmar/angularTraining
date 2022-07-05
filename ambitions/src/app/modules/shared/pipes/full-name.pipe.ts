import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from '../../users/interfaces/user';

@Pipe({
  name: 'fullNamePipe',
})
export class FullNamePipe implements PipeTransform {
  transform(value: IUser | null): string {
    return `${value?.firstName || 'Default'} ${value?.lastName || 'Username'}`;
  }
}

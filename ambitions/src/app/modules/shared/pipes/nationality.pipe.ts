import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nationalityPipe',
})
export class NationalityPipe implements PipeTransform {
  transform(nationality: string): string {
    return `https://countryflagsapi.com/png/${nationality.toLowerCase()}`;
  }
}

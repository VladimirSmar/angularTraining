import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderPipe',
})
export class GenderPipe implements PipeTransform {
  maleIcon: string = '../../../../assets/images/malegender.jpg';
  femaleIcon: string = '../../../../assets/images/femalegender.jpg';

  transform(gender: string): string {
    return gender == 'male' ? this.maleIcon : this.femaleIcon;
  }
}

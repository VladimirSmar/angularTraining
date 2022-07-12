import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullNamePipe } from '../pipes/full-name.pipe';
import { FullAddressPipe } from '../pipes/full-address.pipe';
import { GenderPipe } from '../pipes/gender-pipe.pipe';
import { NationalityPipe } from '../pipes/nationality.pipe';

@NgModule({
  declarations: [FullNamePipe, FullAddressPipe, GenderPipe, NationalityPipe],
  imports: [CommonModule],
  exports: [FullNamePipe, FullAddressPipe, GenderPipe, NationalityPipe],
})
export class PipeModule {}

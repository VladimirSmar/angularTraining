import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLoggerComponent } from './router-logger.component';

@NgModule({
  declarations: [RouterLoggerComponent],
  imports: [CommonModule],
  exports: [RouterLoggerComponent],
})
export class RouterLoggerModule {}

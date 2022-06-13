import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent implements OnInit {

  @Input() addressForm: FormGroup| any;


  constructor() {}

  ngOnInit(): void {
  }

  enableZipInput(): void {
    const inputZip: FormControl = this.addressForm.get('zip');
    const inputCity: FormControl = this.addressForm.get('city')

    if(inputCity?.value){
      inputZip.setValidators([Validators.required]);
      inputZip.enable();
    } else {
      inputZip.disable();
    }
    inputZip.updateValueAndValidity();
  }
}

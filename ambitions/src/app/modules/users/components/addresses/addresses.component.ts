import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IAddress } from '../../interfaces/address';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.scss'],
})
export class AddressesComponent implements OnInit {
  @Input() addresses: IAddress[];
  @Input() isFormInvalid: boolean;
  @Output() emitAddressesFormsArrayEvent: EventEmitter<FormArray> =
    new EventEmitter<FormArray>();

  addressesFormsArray: FormArray;

  constructor(private _formBuilder: FormBuilder) {
    this.addressesFormsArray = this._formBuilder.array([
      this.createAddressesGroup(),
    ]);
  }

  ngOnInit(): void {
    this.addresses?.forEach((address, index) => {
      if (index !== 0) {
        this.addNewAddress();
      }
    });
    this.emitAddressesFormsArrayEvent.emit(this.addressesFormsArray);
  }

  createAddressesGroup(): FormGroup {
    return this._formBuilder.group({
      addressLine: ['', Validators.required],
      city: [''],
      zip: [
        {
          value: '',
          disabled: true,
        },
      ],
    });
  }

  addNewAddress(): void {
    this.addressesFormsArray.push(this.createAddressesGroup());
  }

  deleteAddress(index: number): void {
    this.addressesFormsArray.removeAt(index);
  }
}

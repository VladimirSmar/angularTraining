import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUser } from '../../interfaces/user';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.scss'],
})
export class AddressesComponent implements OnInit, OnChanges {
  @Input() user: IUser;
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
    if (this.user) {
      this.user.addresses.forEach((address, index) => {
        if (index !== 0) {
          this.addNewAddress();
        }
      });
    }
    this.emitAddressesFormsArrayEvent.emit(this.addressesFormsArray);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.user && changes['user']) {
      this.user.addresses.forEach((address, index) => {
        if (index !== 0) {
          this.addNewAddress();
        }
      });
      this.emitAddressesFormsArrayEvent.emit(this.addressesFormsArray);
    }
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

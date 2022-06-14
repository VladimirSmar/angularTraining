import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUser } from '../../interfaces/user';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.scss'],
})
export class AddressesComponent implements OnInit {
  @Input() userGroup: FormGroup = new FormGroup({});
  @Input() user?: IUser;
  @Input() isFormInvalid!: boolean;
  @Input() key!: string;

  addressesFormsArray: FormArray = this._formBuilder.array([
    this.createAddressesGroup(),
  ]);

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.userGroup.addControl(this.key, this.addressesFormsArray);
    this.user?.addresses.forEach((address, index) => {
      if (index !== 0) {
        this.addNewAddress();
      }
    });
    this.userGroup.patchValue({ [this.key]: this.user?.addresses });
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

import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.scss'],
})
export class AddressesComponent implements OnInit {
  @Input() addUserGroup: FormGroup = new FormGroup({});
  @Input() isFormInvalid!: boolean;
  @Input() key!: string;

  addressesFormsArray: FormArray = this._formBuilder.array([this.createAddressesGroup()]);

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.addUserGroup.addControl(this.key, this.addressesFormsArray);
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

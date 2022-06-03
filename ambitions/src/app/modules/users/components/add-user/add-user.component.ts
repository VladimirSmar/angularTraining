import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersValidatorService } from '../../services/users-validator.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  @Input() addUserGroup: FormGroup = new FormGroup({});
  @Input() isFormInvalid!: boolean;

  addUserForm!: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private usersValidatorService: UsersValidatorService
  ) {}

  ngOnInit(): void {
    this.createAddUserForm();
    this.addUserGroup.addControl('user', this.addUserForm);
  }

  createAddUserForm(): void {
    this.addUserForm = this._formBuilder.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      email: [
        null,
        {
          validators: [
            Validators.required,
            Validators.email,
            Validators.pattern(/[a-zA-Z0-9]+@gmail\.com/),
          ],
          asyncValidators: this.usersValidatorService.emailValidator(),
          updateOn: 'blur',
        },
      ],
      age: [
        null,
        [
          Validators.required,
          Validators.min(15),
          Validators.max(100),
          Validators.pattern(/^-?(0|[1-9]\d*)?$/),
        ],
      ],
      department: [null, [Validators.required, Validators.maxLength(50)]],
      company: [null, [Validators.required, Validators.minLength(6)]],
      gender: [null, [Validators.required]],
    });
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersValidatorService } from '../../services/users-validator.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  @Input() isFormInvalid: boolean;
  @Output() emitUserFormEvent: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  userForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private usersValidatorService: UsersValidatorService
  ) {
    this.createAddUserForm();
  }

  ngOnInit(): void {
    this.emitUserFormEvent.emit(this.userForm);
  }

  createAddUserForm(): void {
    this.userForm = this._formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: [
        '',
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
        '',
        [
          Validators.required,
          Validators.min(15),
          Validators.max(100),
          Validators.pattern(/^-?(0|[1-9]\d*)?$/),
        ],
      ],
      nationality: ['', [Validators.required, Validators.maxLength(50)]],
      phone: ['', [Validators.required, Validators.minLength(6)]],
      gender: ['', [Validators.required]],
    });
  }
}

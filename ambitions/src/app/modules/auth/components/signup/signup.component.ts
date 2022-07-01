import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../../validators/confirm-pass.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  @Input() isFormInvalid: boolean;
  @Input() isUserExists: boolean;
  @Output() emitLoginFormEvent: EventEmitter<FormGroup> =
    new EventEmitter<FormGroup>();

  signupForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.createSignupForm();
  }

  createSignupForm(): void {
    this.signupForm = this._formBuilder.group({
      login: ['', Validators.required],
      passwordGroup: this._formBuilder.group(
        {
          password: ['', Validators.required],
          confirmPassword: ['', Validators.required],
        },
        {
          validators: [
            CustomValidators.confirmPasswordValidator(
              'password',
              'confirmPassword'
            ),
          ],
        }
      ),
    });
  }

  ngOnInit(): void {
    this.emitLoginFormEvent.emit(this.signupForm);
  }
}

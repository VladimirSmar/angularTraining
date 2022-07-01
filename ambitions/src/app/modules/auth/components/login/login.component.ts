import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Input() isFormInvalid: boolean;
  @Input() isUserExists: boolean;
  @Output() emitLoginFormEvent: EventEmitter<FormGroup> =
    new EventEmitter<FormGroup>();

  loginForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.createLoginForm();
  }

  createLoginForm(): void {
    this.loginForm = this._formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.emitLoginFormEvent.emit(this.loginForm);
  }
}

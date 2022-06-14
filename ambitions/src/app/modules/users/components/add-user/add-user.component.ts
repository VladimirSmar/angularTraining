import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { combineLatest, merge, Observable } from 'rxjs';
import { IUser } from '../../interfaces/user';
import { UsersValidatorService } from '../../services/users-validator.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  @Input() userGroup: FormGroup = new FormGroup({});
  @Input() user?: IUser;
  @Input() isFormInvalid!: boolean;
  @Input() key!: string;

  userForm!: FormGroup;
  nameChange$: Observable<any>;

  constructor(
    private _formBuilder: FormBuilder,
    private usersValidatorService: UsersValidatorService
  ) {}

  ngOnInit(): void {
    this.createAddUserForm();
    this.userGroup.addControl(this.key, this.userForm);
    this.userGroup.patchValue({ [this.key]: this.user });
    combineLatest(
      this.userGroup.get('user.firstName')!.valueChanges,
      this.userGroup.get('user.lastName')!.valueChanges
    ).subscribe(([firstName, lastName]) => {
      this.createEmailValue(firstName, lastName);
    });
  }

  createEmailValue(firstName: string, lastName: string) {
    this.userGroup
      .get(this.key)!
      .patchValue({ ['email']: firstName + lastName + '@gmail.com' });
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
      department: ['', [Validators.required, Validators.maxLength(50)]],
      company: ['', [Validators.required, Validators.minLength(6)]],
      gender: ['', [Validators.required]],
    });
  }
}

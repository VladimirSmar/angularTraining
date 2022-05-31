import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  addUserGroup!: FormGroup;

  @Output() addUserGroupSubmit: EventEmitter<FormGroup> =
    new EventEmitter<FormGroup>();

  constructor(private _formBuilder: FormBuilder, private el: ElementRef) {
    this.createAddUserForm();
  }

  ngOnInit(): void {}

  createAddUserForm(): void {
    this.addUserGroup = this._formBuilder.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
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

  addNewUser(): void {
    if (this.addUserGroup.valid) {
      this.addUserGroupSubmit.emit(this.addUserGroup.value);
    } else {
      const invalidElements =
        this.el.nativeElement.querySelectorAll('.ng-invalid');
      invalidElements[1].focus();
    }
  }
}

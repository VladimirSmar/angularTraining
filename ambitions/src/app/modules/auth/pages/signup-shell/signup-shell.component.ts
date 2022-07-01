import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationStart,
  Router,
} from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/modules/core/services/auth.service';
import { IAuthUser } from '../../interfaces/authUser';

@Component({
  selector: 'app-signup-shell',
  templateUrl: './signup-shell.component.html',
  styleUrls: ['./signup-shell.component.scss'],
})
export class SignupShellComponent implements OnInit, OnDestroy {
  signupGroup: FormGroup = new FormGroup({});
  isFormInvalid: boolean = false;
  isUserExists: boolean = false;
  _subscriptions: Subscription[] = [];

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this._subscriptions.forEach((sub) => sub.unsubscribe());
  }

  onSignupFormInit(loginForm: FormGroup): void {
    this.signupGroup.addControl('user', loginForm);
  }

  signupUser(): void {
    this.signupGroup.markAllAsTouched();

    if (this.signupGroup.valid) {
      let user: IAuthUser = {
        login: this.signupGroup.value.user?.login,
        password: this.signupGroup.value.user?.passwordGroup.password,
      };

      this._subscriptions.push(
        this.authService
          .signupUser(user)
          .subscribe((result: { status: boolean; message: string }) => {
            console.log(`${result.message}`);
            if (result.status == true) {
              this.authService.loginUser(user);
              this.router.navigate(['/users']);
            } else {
              this.signupGroup.reset();
              this.isUserExists = true;
            }
          })
      );
    } else {
      this.isFormInvalid = true;
    }
  }
}

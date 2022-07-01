import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/modules/core/services/auth.service';
import { IAuthUser } from '../../interfaces/authUser';

@Component({
  selector: 'app-login-shell',
  templateUrl: './login-shell.component.html',
  styleUrls: ['./login-shell.component.scss'],
})
export class LoginShellComponent implements OnInit, OnDestroy {
  loginGroup: FormGroup = new FormGroup({});
  isFormInvalid: boolean = false;
  isUserExists: boolean = true;
  _subscriptions: Subscription[] = [];

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this._subscriptions.forEach((sub) => sub.unsubscribe());
  }

  onLoginFormInit(loginForm: FormGroup): void {
    this.loginGroup.addControl('user', loginForm);
  }

  loginUser(): void {
    this.loginGroup.markAllAsTouched();

    if (this.loginGroup.valid) {
      this._subscriptions.push(
        this.authService
          .verifyUser(this.loginGroup.value.user)
          .subscribe((user: IAuthUser | undefined) => {
            if (user) {
              this.authService.loginUser(user);
              this.router.navigate(['/users']);
            } else {
              this.loginGroup.reset();
              this.isUserExists = false;
            }
          })
      );
    } else {
      this.isFormInvalid = true;
      this.isUserExists = true;
    }
  }
}

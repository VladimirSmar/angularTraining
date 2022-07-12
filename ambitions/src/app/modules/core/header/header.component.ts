import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  NavigationStart,
  Router,
  Event as NavigationEvent,
} from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  userName: string | undefined;
  userPhoto: string = 'assets/images/thirduser.jpg';
  logo: string = 'assets/images/logo.jpg';
  logoColor: string;
  _subscriptions: Subscription[] = [];

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe((data) => {
      this.userName = data?.login;
    });
  }

  getLogoColor() {
    if (this.router.url.includes('/vehicles')) {
      return 'ambitions-header__link_vehicles-active';
    } else if (this.router.url.includes('/uiTable')) {
      return 'ambitions-header__link_uiTable-active';
    } else if (this.router.url.includes('/serverTable')) {
      return 'ambitions-header__link_serverTable-active';
    } else if (this.router.url.includes('/users')) {
      return 'ambitions-header__link_users-active';
    } else {
      return '';
    }
  }

  ngOnDestroy(): void {
    this._subscriptions.forEach((sub) => sub.unsubscribe());
  }

  logOutUser(event: Event): void {
    event.preventDefault();
    this.authService.logOutUser();
  }
}

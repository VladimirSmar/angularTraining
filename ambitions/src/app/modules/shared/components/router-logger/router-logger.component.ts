import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationStart,
  Router,
} from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-router-logger',
  templateUrl: './router-logger.component.html',
  styleUrls: ['./router-logger.component.scss'],
})
export class RouterLoggerComponent implements OnInit, OnDestroy {
  _subscriptions: Subscription[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this._subscriptions.push(
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationStart) {
          console.log(`Navigating to "${event.url}"`);
        }
        if (event instanceof NavigationCancel) {
          console.log(`Permissions not granted to "${event.url}"`);
        }
        if (event instanceof NavigationEnd) {
          console.log(`Navigated to "${event.url}"`);
        }
      })
    );
  }

  ngOnDestroy(): void {
    this._subscriptions.forEach((sub) => sub.unsubscribe());
  }
}

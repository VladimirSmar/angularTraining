import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnDestroy {
  searchControl = new FormControl();
  _subscriptions: Subscription[] = [];

  @Output() searchInputChanged: EventEmitter<string> =
    new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
    this._subscriptions.push(
      this.searchControl.valueChanges
        .pipe(debounceTime(500), distinctUntilChanged())
        .subscribe((value: string) => {
          this.searchInputChanged.emit(value);
        })
    );
  }

  ngOnDestroy(): void {
    this._subscriptions.forEach((sub) => sub.unsubscribe());
  }
}

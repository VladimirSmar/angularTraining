import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-user-shell',
  templateUrl: './edit-user-shell.component.html',
  styleUrls: ['./edit-user-shell.component.scss'],
})
export class EditUserShellComponent implements OnInit {
  hasUnsavedChanges: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  canDeactivate(hasUnsavedChanges: boolean): void {
    this.hasUnsavedChanges = hasUnsavedChanges;
  }
}

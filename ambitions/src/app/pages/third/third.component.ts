import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.scss'],
})
export class ThirdComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;
}

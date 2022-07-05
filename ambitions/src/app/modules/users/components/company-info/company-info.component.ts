import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.scss'],
})
export class CompanyInfoComponent implements OnInit {
  myDate: number;

  constructor() {}

  ngOnInit(): void {
    this.myDate = Date.now();
  }
}

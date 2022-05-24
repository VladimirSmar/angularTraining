import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss'],
})
export class VehicleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

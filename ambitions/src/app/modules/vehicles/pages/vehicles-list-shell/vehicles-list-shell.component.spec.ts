import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesListShellComponent } from './vehicles-list-shell.component';

describe('VehiclesListShellComponent', () => {
  let component: VehiclesListShellComponent;
  let fixture: ComponentFixture<VehiclesListShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VehiclesListShellComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclesListShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

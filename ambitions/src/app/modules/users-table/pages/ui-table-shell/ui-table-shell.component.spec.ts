import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiTableShellComponent } from './ui-table-shell.component';

describe('UiTableShellComponent', () => {
  let component: UiTableShellComponent;
  let fixture: ComponentFixture<UiTableShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiTableShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiTableShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

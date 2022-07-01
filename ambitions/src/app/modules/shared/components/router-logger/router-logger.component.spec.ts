import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterLoggerComponent } from './router-logger.component';

describe('RouterLoggerComponent', () => {
  let component: RouterLoggerComponent;
  let fixture: ComponentFixture<RouterLoggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterLoggerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterLoggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

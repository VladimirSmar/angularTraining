import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupShellComponent } from './signup-shell.component';

describe('SignupShellComponent', () => {
  let component: SignupShellComponent;
  let fixture: ComponentFixture<SignupShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

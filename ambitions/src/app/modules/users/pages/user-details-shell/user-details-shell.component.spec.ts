import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsShellComponent } from './user-details-shell.component';

describe('UserDetailsShellComponent', () => {
  let component: UserDetailsShellComponent;
  let fixture: ComponentFixture<UserDetailsShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetailsShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

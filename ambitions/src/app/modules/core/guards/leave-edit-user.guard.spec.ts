import { TestBed } from '@angular/core/testing';

import { LeaveEditUserGuard } from './leave-edit-user.guard';

describe('LeaveEditUserGuard', () => {
  let guard: LeaveEditUserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LeaveEditUserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

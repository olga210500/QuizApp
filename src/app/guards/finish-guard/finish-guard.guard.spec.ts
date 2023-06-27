import { TestBed } from '@angular/core/testing';

import { FinishGuardGuard } from './finish-guard.guard';

describe('FinishGuardGuard', () => {
  let guard: FinishGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FinishGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

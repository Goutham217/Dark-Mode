import { TestBed } from '@angular/core/testing';

import { ReimbursementsService } from './reimbursements.service';

describe('PendingReimbursementsService', () => {
  let service: ReimbursementsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReimbursementsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

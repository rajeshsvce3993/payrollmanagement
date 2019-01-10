import { TestBed, inject } from '@angular/core/testing';

import { LeaveMasterService } from './leave-master.service';

describe('LeaveMasterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LeaveMasterService]
    });
  });

  it('should be created', inject([LeaveMasterService], (service: LeaveMasterService) => {
    expect(service).toBeTruthy();
  }));
});

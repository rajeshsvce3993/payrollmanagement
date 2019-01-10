import { TestBed, inject } from '@angular/core/testing';

import { BenifitService } from './benifit.service';

describe('BenifitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BenifitService]
    });
  });

  it('should be created', inject([BenifitService], (service: BenifitService) => {
    expect(service).toBeTruthy();
  }));
});

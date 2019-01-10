import { TestBed, inject } from '@angular/core/testing';

import { ViewBankdetailsService } from './view-bankdetails.service';

describe('ViewBankdetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewBankdetailsService]
    });
  });

  it('should be created', inject([ViewBankdetailsService], (service: ViewBankdetailsService) => {
    expect(service).toBeTruthy();
  }));
});

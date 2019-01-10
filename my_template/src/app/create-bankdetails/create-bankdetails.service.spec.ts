import { TestBed, inject } from '@angular/core/testing';

import { CreateBankdetailsService } from './create-bankdetails.service';

describe('CreateBankdetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateBankdetailsService]
    });
  });

  it('should be created', inject([CreateBankdetailsService], (service: CreateBankdetailsService) => {
    expect(service).toBeTruthy();
  }));
});

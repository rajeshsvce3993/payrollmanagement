import { TestBed, inject } from '@angular/core/testing';

import { ViewSalaryService } from './view-salary.service';

describe('ViewSalaryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewSalaryService]
    });
  });

  it('should be created', inject([ViewSalaryService], (service: ViewSalaryService) => {
    expect(service).toBeTruthy();
  }));
});

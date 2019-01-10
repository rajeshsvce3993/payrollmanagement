import { TestBed, inject } from '@angular/core/testing';

import { GenerateSalaryService } from './generate-salary.service';

describe('GenerateSalaryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GenerateSalaryService]
    });
  });

  it('should be created', inject([GenerateSalaryService], (service: GenerateSalaryService) => {
    expect(service).toBeTruthy();
  }));
});

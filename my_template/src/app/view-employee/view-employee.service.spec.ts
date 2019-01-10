import { TestBed, inject } from '@angular/core/testing';

import { ViewEmployeeService } from './view-employee.service';

describe('ViewEmployeeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewEmployeeService]
    });
  });

  it('should be created', inject([ViewEmployeeService], (service: ViewEmployeeService) => {
    expect(service).toBeTruthy();
  }));
});

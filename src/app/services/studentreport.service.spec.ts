import { TestBed } from '@angular/core/testing';

import { StudentreportService } from './studentreport.service';

describe('StudentreportService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentreportService = TestBed.get(StudentreportService);
    expect(service).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorDetailedReportPage } from './professor-detailed-report.page';

describe('ProfessorDetailedReportPage', () => {
  let component: ProfessorDetailedReportPage;
  let fixture: ComponentFixture<ProfessorDetailedReportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessorDetailedReportPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorDetailedReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

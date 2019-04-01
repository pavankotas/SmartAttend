import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartAttendancePage } from './start-attendance.page';

describe('StartAttendancePage', () => {
  let component: StartAttendancePage;
  let fixture: ComponentFixture<StartAttendancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartAttendancePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartAttendancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

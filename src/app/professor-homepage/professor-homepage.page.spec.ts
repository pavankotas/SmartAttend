import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorHomepagePage } from './professor-homepage.page';

describe('ProfessorHomepagePage', () => {
  let component: ProfessorHomepagePage;
  let fixture: ComponentFixture<ProfessorHomepagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessorHomepagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorHomepagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

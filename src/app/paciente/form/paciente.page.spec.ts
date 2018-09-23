import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteFormPage } from './paciente.page';

describe('PacienteFormPage', () => {
  let component: PacienteFormPage;
  let fixture: ComponentFixture<PacienteFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacienteFormPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacienteFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteListPage } from './paciente.page';

describe('PacienteListPage', () => {
  let component: PacienteListPage;
  let fixture: ComponentFixture<PacienteListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacienteListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacienteListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

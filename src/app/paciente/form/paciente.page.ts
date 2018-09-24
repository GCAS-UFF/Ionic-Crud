import { Component, OnInit } from '@angular/core';
import { createFormTo } from '../../core/crudion/utils/crudion';
import { Paciente } from '../paciente.model';
import { FormGroup } from '@angular/forms';
import { PacienteFirestore } from '../paciente.firestore';

@Component({
  selector: 'form-paciente',
  templateUrl: './paciente.page.html',
  styleUrls: ['./paciente.page.scss'],
})
export class PacienteFormPage implements OnInit {

  htmlForm: any[];
  formGroup: FormGroup;

  constructor(private db: PacienteFirestore) { }

  ngOnInit() {

    let form = createFormTo(new Paciente());
    this.formGroup = form.formGroup;
    this.htmlForm = form.htmlOptions;

  }

  create(event) {
    this.db.create(Paciente, event);
  }

  update(event) {
    this.db.update(Paciente, event);
  }

  delete(event) {
    this.db.delete(event);
  }

}

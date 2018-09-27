import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbstractFormPage } from '../../core/crudion/pages/abstract-form.page';
import { PacienteFirestore } from '../paciente.firestore';
import { Paciente } from '../paciente.model';

@Component({
  selector: 'form-paciente',
  templateUrl: './paciente.page.html',
  styleUrls: ['./paciente.page.scss'],
})
export class PacienteFormPage extends AbstractFormPage<Paciente> {

  constructor(private route: ActivatedRoute, private db: PacienteFirestore) {
    super(route, Paciente, db);
  }

  create(event){
    console.log(event);
  }
}



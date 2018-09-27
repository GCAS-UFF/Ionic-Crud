import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AbstractListPage } from '../../core/crudion/pages/abstract-list.page';
import { PacienteFirestore } from '../paciente.firestore';
import { Paciente } from '../paciente.model';

@Component({
  selector: 'list-paciente',
  templateUrl: './paciente.page.html',
  styleUrls: ['./paciente.page.scss'],
})
export class PacienteListPage extends AbstractListPage<Paciente> {

  constructor(private nCtrl: NavController, private db: PacienteFirestore) {
    super(
      Paciente,
      'pacientes',
      { field: 'name', message: 'Nome do Paciente' },
      db,
      nCtrl
    );
  }
}

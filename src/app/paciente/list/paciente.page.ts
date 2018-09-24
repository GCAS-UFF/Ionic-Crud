import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { PacienteFirestore } from '../paciente.firestore';
import { Paciente } from '../paciente.model';
import { GenericUtils } from '../../core/crudion/utils/generic.utils';

@Component({
  selector: 'list-paciente',
  templateUrl: './paciente.page.html',
  styleUrls: ['./paciente.page.scss'],
})
export class PacienteListPage implements OnInit {

  pacientes: Observable<any[]>;

  objects = new BehaviorSubject(Observable.create([]));

  searchOptions: { field: string; message?: string; };
  
  fields: any;

  constructor(private navCtrl: NavController, private db: PacienteFirestore) { }

  async ngOnInit() {

    this.searchOptions = {
      field: 'name',
      message: 'Nome do Paciente'
    }

    this.objects.next(this.db.findAll());

    this.fields = GenericUtils.getFields(Paciente);

  }

  visualizar(event) {
    console.log(event);
  }

  add() {
    this.navCtrl.navigateForward('/pacientes/add');
  }

  searchBy(q: string) {

    this.objects.next(this.db.findByField(q, this.searchOptions.field));

  }

  orderBy(q: any) {

    this.objects.next(this.db.findOrderBy(q.field, q.type));
  }

}

import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { PacienteFirestore } from '../paciente.firestore';
import { Paciente } from '../paciente.model';

@Component({
  selector: 'list-paciente',
  templateUrl: './paciente.page.html',
  styleUrls: ['./paciente.page.scss'],
})
export class PacienteListPage implements OnInit {
  
  pacientes:Observable<any[]>;
  
  objects = new BehaviorSubject(Observable.create([]));

  searchOptions: { field: string; message?: string; };
  
  constructor(private navCtrl: NavController, private db: PacienteFirestore) { }

  async ngOnInit() {

    this.searchOptions = {
      field: 'name',
      message: 'Nome do Paciente'
    }

    this.objects.next(this.db.findAll());

  }

  visualizar(event) {
    console.log(event);
  }

  add() {
    this.navCtrl.navigateForward('/pacientes/add');
  }

  searchByEmail(q: string) {

    this.objects.next(this.db.findByField(q, this.searchOptions.field));

  }

}

import { AbstractFirestore } from '../core/providers/abstract.firestore';
import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Paciente } from './paciente.model';

@Injectable()
export class PacienteFirestore extends AbstractFirestore<Paciente> {

    constructor(db: AngularFirestore) {
        super('Pacientes', db);
    }
}
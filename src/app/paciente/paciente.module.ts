import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PacienteListPage } from './list/paciente.page';
import { PacienteFormPage } from './form/paciente.page';
import { PacienteFirestore } from './paciente.firestore';
import { CrudionModule } from '../core/crudion/crudion.module';

const routes: Routes = [
  { path: '', component: PacienteListPage },
  { path: 'add', component: PacienteFormPage },
  { path: 'edit/:id', component: PacienteFormPage }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudionModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PacienteListPage, PacienteFormPage],
  providers: [PacienteFirestore]
})
export class PacientePageModule { }

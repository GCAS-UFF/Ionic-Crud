import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { CrudionFormComponent } from "./components/form/form.component";
import { CrudionListComponent } from "./components/list/list.component";
import { SortModal } from './components/sort/sort.modal';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule,
    ],
    declarations: [
        CrudionFormComponent, 
        CrudionListComponent,
        SortModal
    ],
    entryComponents: [
        SortModal
    ],
    exports: [ 
        CrudionFormComponent, 
        CrudionListComponent,
    ]
})
export class CrudionModule { }
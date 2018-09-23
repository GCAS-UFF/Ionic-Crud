import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";

import { IonicModule } from "@ionic/angular";
import { CrudionFormComponent } from "./components/form/form.component";
import { CrudionListComponent } from "./components/list/list.component";
import { SortModal } from './components/sort/sort.modal';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
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
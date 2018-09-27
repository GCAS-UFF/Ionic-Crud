import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { CrudionFormComponent } from "./components/form/form.component";
import { CrudionListComponent } from "./components/list/list.component";
import { SortModal } from './components/sort/sort.modal';
import { ErrorMessages } from "./components/error-message/error-message.component";

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
        SortModal,
        ErrorMessages
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
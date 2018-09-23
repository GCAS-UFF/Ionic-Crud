import { Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChange } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Observable, BehaviorSubject } from "rxjs";
import { SortModal } from "../sort/sort.modal";

@Component({
    selector: 'crudion-list',
    templateUrl: 'list.component.html',
    styleUrls: ['list.component.scss']
})
export class CrudionListComponent implements OnInit, OnChanges {

    objectKeys = Object.keys;

    @Input('searchOptions')
    searchOptions: { field: string, message?: string };

    @Input('list')
    documentos: BehaviorSubject<Observable<any[]>>;

    @Output()
    clicked = new EventEmitter<any>();

    @Output()
    search = new EventEmitter<string>();

    fields: string[];

    docs: any[];

    constructor(private modal: ModalController) {

    }

    ngOnInit(): void {
        // this.getFields();
    }

    ngOnChanges(changes: { [propKey: string]: SimpleChange }): void {
        this.setDocs(changes);
    }

    private setDocs(changes: { [propKey: string]: SimpleChange; }) {
        let docChanges = changes.documentos.currentValue;
        if (docChanges) {
            this.documentos = docChanges
                .subscribe(result => {
                    result
                        .subscribe(docs => this.docs = docs);
                });
        }
    }

    async sort() {
        const modal = await this.modal.create({
            component: SortModal,
            componentProps: { fields: this.fields }
        })

        return await modal.present();
    }


    emit(object) {
        this.clicked.emit(object);
    }

    filter(event) {
        this.search.emit(event.detail.value);
    }

    private getFields() {
        this.fields = Object.getOwnPropertyNames(this.documentos[0]);
        delete this.fields['id'];

    }
} 
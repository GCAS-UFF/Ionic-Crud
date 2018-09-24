import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
@Component({
    templateUrl: 'sort.modal.html'
})
export class SortModal implements OnInit {

    sortHeader: string = 'Ordenar por';
    field: string;
    type: string;

    fields: string[];

    constructor(private params: NavParams, private modal: ModalController) {

    }

    ngOnInit(): void {

        this.type = 'asc';
        this.fields = this.params.get('fields');

        if(this.params.get('orderBy')){
            this.field = this.params.get('orderBy').field;
            this.type = this.params.get('orderBy').type;
        }
    }

    sort() {
        this.modal.dismiss({ field: this.field, type: this.type });
    }

    dismiss() {
        this.modal.dismiss();
    }

    showType(field: string, type: string) {
        return this.field &&
            field === this.field &&
            this.type === type;
    }

    toggle(type: string) {
        type === 'asc' ? this.type = 'desc' : this.type = 'asc';
    }

}
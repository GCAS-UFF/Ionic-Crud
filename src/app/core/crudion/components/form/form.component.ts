import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
    selector: 'crudion-form',
    templateUrl: 'form.component.html'
})
export class CrudionFormComponent implements OnInit {

    objeto: any;

    @Input('edit')
    edicao: boolean

    @Input('group')
    formGroup: FormGroup;

    @Input('controls')
    formControls: { name: string, htmlType: string }[];

    @Output()
    create = new EventEmitter<any>();

    @Output()
    update = new EventEmitter<any>();

    @Output()
    delete = new EventEmitter<any>();

    constructor() {
    }

    ngOnInit(): void {
        this.objeto = this.formGroup.value;
    }

    createEmit() {
        this.create.emit(this.formGroup.value);
    }

    updateEmit(){
        this.update.emit(this.formGroup.value);
    }
    
    deleteEmit() {
        this.delete.emit(this.objeto);
    }

    equals(): boolean {
        return (JSON.stringify(this.objeto) === JSON.stringify(this.formGroup.value));
    }
}  
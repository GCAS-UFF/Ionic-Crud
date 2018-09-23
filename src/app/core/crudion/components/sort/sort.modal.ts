import { Component, OnInit} from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
    templateUrl: 'sort.modal.html'
})
export class SortModal implements OnInit {
    
    fields: string[];
    
    constructor(private params: NavParams, private modal: ModalController) {
        
    }
    
    ngOnInit(): void {
        this.fields = this.params.get('fields');
    }

    dismiss(){
        this.modal.dismiss();
    }


}
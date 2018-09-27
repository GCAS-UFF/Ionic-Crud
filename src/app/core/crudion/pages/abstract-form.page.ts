import { AbstractFirestore } from "../../providers/abstract.firestore";
import { GenericUtils } from "../utils/generic.utils";
import { ActivatedRoute } from "@angular/router";
import { FormGroup } from "@angular/forms";
import { OnInit } from "@angular/core";
import { createFormTo } from "../utils/crudion";

export class AbstractFormPage<T> implements OnInit {

    id: any;
    htmlForm: any[];
    formGroup: FormGroup;
    edit: boolean;

    constructor(
        private rt: ActivatedRoute,
        private clazz: any,
        private abstractDB: AbstractFirestore<T>
    ) {

    }

    ngOnInit() {

        let object: T = GenericUtils.getGenericInstance(this.clazz);

        this.rt.params.subscribe(async params => {

            if (params.id) {
                object = await this.abstractDB.findBy(this.clazz, params.id);
                this.id = params.id;
                this.edit = true;
            }

            let form = createFormTo(object, this.edit);
            this.formGroup = form.formGroup;
            this.htmlForm = form.htmlOptions;
        });
    }


    create(event: any) {
        this.abstractDB.create(this.clazz, event);
    }

    update(event: any) {
        this.abstractDB.update(this.clazz, this.id, event);
    };

    delete() {
        this.abstractDB.delete(this.id);
    }

}
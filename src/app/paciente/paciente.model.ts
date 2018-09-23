import { Validators } from "@angular/forms";
import { HtmlType } from "../core/crudion/annotations/htmltype.annotation";
import { Valid } from "../core/crudion/annotations/valid.annotation";
import { HTMLType } from "../core/crudion/enums/htmltype.enum";

export class Paciente {

    @Valid([Validators.required, Validators.minLength(10)])
    private name: string = '';
    
    @Valid([Validators.required])
    private age: number = 0;

    @HtmlType(HTMLType.EMAIL)
    @Valid([Validators.required, Validators.email])
    private email: string = '';

    @HtmlType(HTMLType.PASSWORD)
    @Valid([Validators.required])
    private password: string = '';

    constructor(object?){
        object && Object.assign(this, object);
    }

}
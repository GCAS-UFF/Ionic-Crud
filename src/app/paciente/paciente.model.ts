import { Validators } from "@angular/forms";
import { HtmlType } from "../core/crudion/annotations/htmltype.annotation";
import { Valid } from "../core/crudion/annotations/valid.annotation";
import { HTMLType } from "../core/crudion/enums/htmltype.enum";
import { InitValue } from "../core/crudion/annotations/initialvalue.annotation";

export class Paciente {

    @Valid([Validators.required, Validators.minLength(10)])
    private name: string = '';

    @InitValue('')
    @Valid([Validators.required])
    private age: number = Number(0);

    @HtmlType(HTMLType.EMAIL)
    @Valid([Validators.required, Validators.email])
    private email: string = '';

    @HtmlType(HTMLType.PASSWORD)
    @Valid([Validators.required])
    private password: string = '';

    constructor(object?) {
        if (object) {
            this.name = object.name;
            this.age = Number(object.age);
            this.email = object.email;
            this.password = object.password;
        }
    }

}
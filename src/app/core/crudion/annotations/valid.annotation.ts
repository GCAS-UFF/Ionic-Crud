import { ValidatorFn, AbstractControlOptions } from "@angular/forms";
import 'reflect-metadata';

export function Valid(validators: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null) { 
    return Reflect.metadata("Valid", validators); 
}

export function getValid(object: any, field: string){
    let validators = Reflect.getMetadata("Valid", object, field);
    if (!validators) {
        return [];
    }
    return validators;
}

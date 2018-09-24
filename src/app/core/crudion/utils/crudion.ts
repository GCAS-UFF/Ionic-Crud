import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { getValid } from '../annotations/valid.annotation';
import { getHtmlType } from '../annotations/htmltype.annotation';
import { getInitValue } from "../annotations/initialvalue.annotation";

export function createFormTo(object: any) {

    let formBuilder = new FormBuilder();

    let formGroup: FormGroup = formBuilder.group({});
    let htmlOptions = [];

    let fields: string[] = Object.getOwnPropertyNames(object);
    fields.forEach(field => {


        let validators = getValid(object, field);
        let type = getHtmlType(object, field);
        let initValue = getInitValue(object, field);
        
        if(initValue !== undefined){
            object[field] = initValue;
        }
        
        formGroup.addControl(field, new FormControl(object[field], validators));

        let html = {
            name: field,
            htmlType: type
        }

        htmlOptions.push(html);
    })

    return { formGroup, htmlOptions };

}

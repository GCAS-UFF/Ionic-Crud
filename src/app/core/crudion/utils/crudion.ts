import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { getValid } from '../annotations/valid.annotation';
import { getHtmlType } from '../annotations/htmltype.annotation';
import { getInitValue } from "../annotations/initialvalue.annotation";
import { HTMLType } from "../enums/htmltype.enum";
import { getDateFormat } from "../annotations/date-format.annotations";

export function createFormTo(object: any, edit: boolean) {

    let formBuilder = new FormBuilder();

    let formGroup: FormGroup = formBuilder.group({});
    let htmlOptions = [];

    let fields: string[] = Object.getOwnPropertyNames(object);
    fields.forEach(field => {


        let validators = getValid(object, field);
        let type = getHtmlType(object, field);
        let initValue = getInitValue(object, field);
        
        if(initValue !== undefined && !edit){
            object[field] = initValue;
        }
        
        formGroup.addControl(field, new FormControl(object[field], validators));

        let html = {
            name: field,
            htmlType: type
        }

        if(type === HTMLType.DATE && getDateFormat(object, field)){
            html['dateOptions'] = getDateFormat(object, field);
        }

        htmlOptions.push(html);
    })

    return { formGroup, htmlOptions };

}

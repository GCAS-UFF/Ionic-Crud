import 'reflect-metadata';
import { HTMLType } from '../enums/htmltype.enum';

export function HtmlType(type: HTMLType) { 
    return Reflect.metadata("HtmlType", type); 
}

export function getHtmlType(object: any, field: string): any {
    
    let htmlType = Reflect.getMetadata("HtmlType", object, field);

    console.log(htmlType);

    if (!htmlType) {
        let type = typeof object[field];
        if (type === 'string') {
            return 'text';
        }
        if (type === 'number') {
            return 'number';
        }
        if (object[field] instanceof Array) {
            return 'select';
        }

        return 'text';
    }

    return htmlType;
}
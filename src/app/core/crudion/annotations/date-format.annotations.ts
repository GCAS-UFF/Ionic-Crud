import 'reflect-metadata';
export function DateFormat(format: string, min?: string, max?: string) {
    return Reflect.metadata("DateFormat", { format, min, max });
}

export function getDateFormat(object: any, field: string) {
    return Reflect.getMetadata("DateFormat", object, field);
}
import 'reflect-metadata';

export function InitValue(value: string) {
    return Reflect.metadata('InitValue', value);
}

export function getInitValue(object: any, field: string) {
    return Reflect.getMetadata("InitValue", object, field);
}
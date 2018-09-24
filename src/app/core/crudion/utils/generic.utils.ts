export class GenericUtils {

    constructor() {

    }

    static getFields(clazz: any): string[] {
        let generic = this.getGenericObject(clazz, {});
        return Object.getOwnPropertyNames(generic);        
    }

    static getGenericObject<T>(clazz: { new(object): T; }, object: any): T {
        let instance = new clazz(object);
        return Object.assign({}, instance);
    }
}
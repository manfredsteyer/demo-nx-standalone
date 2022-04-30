import { ɵComponentType, ɵNgModuleType, ɵDirectiveType, Type } from "@angular/core";

export type ImportableType<T> = ɵNgModuleType<T> | ɵComponentType<T> | ɵDirectiveType<T>;

export function all(object: Object): Type<any>[] {
    return Object.values(object) as Type<any>[];
}
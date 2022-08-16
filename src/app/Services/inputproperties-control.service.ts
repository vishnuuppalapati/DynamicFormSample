import { Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { PropertiesBase } from "../FormProperties/properties-base";


@Injectable()

export class InputPropertiesControlService {
    constructor() { }

    toFormGroup(properties: PropertiesBase<string>[] ){
        const group:any = {};

        properties.forEach(property => {
            group[property.key] = property.required ? new FormControl(property.value || '', Validators.required)
                                                    : new FormControl(property.value || '');
        });
        return new FormGroup(group);
    }
}
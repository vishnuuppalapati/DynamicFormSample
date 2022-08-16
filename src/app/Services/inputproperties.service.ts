import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { CheckBox } from "../FormProperties/checkbox";
import { Dropdown } from "../FormProperties/dropdown";
import { PropertiesBase } from "../FormProperties/properties-base";
import { Textbox } from "../FormProperties/textbox";


@Injectable()
export class InputPropertiesService {

  // TODO: get from a remote source of question metadata
  getProperties() {

    const properties: PropertiesBase<string>[] = [

      new Dropdown({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),

      new Textbox({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),

      new Textbox({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      }),
      new CheckBox({
        key: 'standard',
        label: 'Select Standard',
        checkoptions: [
          { id: 1, value: '7th' },
          { id: 2, value: '8th' },
          { id: 3, value: '9th' },
          { id: 4, value: '10th' }
        ],
        order: 4
      }),
    ];

    return of(properties.sort((a, b) => a.order - b.order));
  }
}
export class PropertiesBase<T> {
    value: T|undefined;
    key: string;
    label: string;
    required: boolean;
    order: number;
    controlType: string;
    type: string;
    id: number;
    options: {key: string, value: string}[];
    checkoptions: {id: number, value: string}[];
  
    constructor(options: {
        value?: T;
        key?: string;
        label?: string;
        required?: boolean;
        order?: number;
        controlType?: string;
        type?: string;
        id?: number;
        options?: {key: string, value: string}[];
        checkoptions?: {id: number, value: string}[]
      } = {}) {
      this.value = options.value;
      this.key = options.key || '';
      this.label = options.label || '';
      this.required = !!options.required;
      this.order = options.order === undefined ? 1 : options.order;
      this.controlType = options.controlType || '';
      this.type = options.type || '';
      this.id = options.id === undefined ? 1 : options.id;
      this.options = options.options || [];
      this.checkoptions = options.checkoptions || [];
    }
  }
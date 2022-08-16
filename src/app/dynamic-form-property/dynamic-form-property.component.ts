import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PropertiesBase } from '../FormProperties/properties-base';

@Component({
  selector: 'app-property',
  templateUrl: './dynamic-form-property.component.html',
  styleUrls: ['./dynamic-form-property.component.css']
})
export class DynamicFormPropertyComponent implements OnInit {

  @Input() property!: PropertiesBase<string>;
  @Input() form!: FormGroup;
  get isValid() { return this.form.controls[this.property.key].valid; }

  
  constructor() { }

  ngOnInit(): void {
  }

}

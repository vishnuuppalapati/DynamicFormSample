import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PropertiesBase } from '../FormProperties/properties-base';
import { InputPropertiesControlService } from '../Services/inputproperties-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
  providers: [ InputPropertiesControlService ]
})
export class DynamicFormComponent implements OnInit {

  @Input() properties: PropertiesBase<string>[] | null = [];
  form!: FormGroup;
  payLoad = '';
  constructor(private qcs: InputPropertiesControlService) { 
  }

  ngOnInit(): void {
    this.form = this.qcs.toFormGroup(this.properties as PropertiesBase<string>[])
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}

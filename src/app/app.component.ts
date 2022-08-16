import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PropertiesBase } from './FormProperties/properties-base';
import { InputPropertiesService } from './Services/inputproperties.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  providers:  [InputPropertiesService]
})
export class AppComponent {
  title = 'dynamicforms';

  properties$: Observable<PropertiesBase<any>[]>;

  constructor(service: InputPropertiesService) { 
    this.properties$ = service.getProperties();
  }
}

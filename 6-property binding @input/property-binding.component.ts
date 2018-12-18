import { Component,Input} from '@angular/core';

@Component({
  selector: 'app-property-binding',
  template: `
    <p>
      {{result}}
    </p>
  `,
  styles: []
})
export class PropertyBindingComponent  {

@Input() result:number=0;


}

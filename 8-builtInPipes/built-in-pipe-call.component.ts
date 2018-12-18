import { Component } from '@angular/core';

@Component({
  selector: 'app-built-in-pipe-call',
  template: `
    <p>
      {{name}}<br/>
      {{name | uppercase}}<br/>
      {{name | slice:2}}<br/>
      {{name |slice:2:4}}<br/>
      {{name |slice:2:4 | uppercase}}<br/>
      {{date}}<br/>
      {{date | date}}<br/>
      {{date |date:"MM/dd/yy"}}<br/>
      
    </p>
  `,
  styles: []
})
export class BuiltInPipeCallComponent {
name:string="priyanthan";
date=new Date();

}

import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  template: `
   <form (ngSubmit)="onSubmit(f)" #f="ngForm">
      <div ngModelGroup="nameGrp">
       <input type="text" ngModel name="username" >
      </div>
       <input type="text" ngModel name="password" >
       <button type="submit" >Submit</button><br/>
  </form>
  `
})
export class TemplateDrivenFormComponent {

 onSubmit(form:NgForm){
   console.log(form.value.nameGrp.username);
 }
}

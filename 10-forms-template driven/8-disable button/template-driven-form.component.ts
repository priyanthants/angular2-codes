import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  template: `
   <form (ngSubmit)="onSubmit(f)" #f="ngForm">
       <input type="text" #name="ngModel" ngModel name="username" required><br/>
       <div *ngIf="!name.valid">enter username</div>
       <button type="submit" [disabled]="!f.valid">Submit</button><br/>
  </form>
  `
})
export class TemplateDrivenFormComponent {

 onSubmit(form:NgForm){
   console.log(form.value.username);
 }
}

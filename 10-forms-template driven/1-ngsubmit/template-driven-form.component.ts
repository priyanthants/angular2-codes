import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  template: `
   <form (ngSubmit)="onSubmit()">
		<input type="text"><br/>
		<button type="submit" >Submit</button><br/>
  </form>
  `,
  styles: []
})
export class TemplateDrivenFormComponent {

 onSubmit(){
   console.log("submitted");
 }
}

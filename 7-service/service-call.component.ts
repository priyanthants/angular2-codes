import { Component, OnInit } from '@angular/core';
import {LogService} from './log.service';

@Component({
  selector: 'app-service-call',
  template: `
    <p>
      service-call Works!
    </p>
  `,
  styles: []
})
export class ServiceCallComponent implements OnInit {

  constructor(private logService:LogService ) { }

  ngOnInit() {
    this.logService.writeToLog("hai");
  }

}

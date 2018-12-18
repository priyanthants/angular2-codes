import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  //pure:false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value.length==0)
    return value;

    let result=[];

    value.forEach(element => {
      if(element.match('^.*'+args+'.*$'))
      result.push(element);
    });
    return result;
  }

}

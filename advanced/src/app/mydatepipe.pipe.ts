import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mydatepipe'
})
export class MydatepipePipe implements PipeTransform {

  transform( date: Date, ...args: any[]): unknown {
    return date.getDate()+'/'+date.getMonth();


  }

}

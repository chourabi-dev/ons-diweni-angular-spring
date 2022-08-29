import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emailpipe'
})
export class EmailpipePipe implements PipeTransform {

  transform(  email: string, ...args: unknown[]): unknown {

    const first = email[0];
    const second = email[1];

    const domaine = email.split('@')[1]
    

    
    

    return first+second+'***********'+'@'+domaine;
  }

}

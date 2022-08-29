import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'advanced';

  today = new Date();


   
  email:string="tchourabi@gmail.com";


  formatDate(date:Date){

    return date.getDate()+'/'+date.getMonth();
  }
}

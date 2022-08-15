import { Component } from '@angular/core';
import { Procuct } from './models/Products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  name:string = "chourabi taher";

  year = 2022;

  email;


  today = new Date();


  age:number = 90;



  

  employee = { name:"chourabi taher", age:80, email:"tchourabi@gmail.com" };


  /******************************************************************************************* */



  employees:string[] = [ 'chourabi taher','chourabi taher 1','chourabi taher 2' ];



  products:Procuct[] = [
    new Procuct(5,"samsung s21",2500,10), // { id:5, title:"HP headset", price:20, stock:20 }
    new Procuct(6,"HP pavillon",2000,0),
    new Procuct(7,"LG smart TV",1800,0)

    
  ];


  /*products2:Procuct[] = [
    { id:5, title:"HP headset", price:20, stock:20 },
    { id:5, title:"HP headset", price:20, stock:20 },
    
    
  ];*/

}

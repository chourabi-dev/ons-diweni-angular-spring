import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http-call-demo',
  templateUrl: './http-call-demo.component.html',
  styleUrls: ['./http-call-demo.component.css']
})
export class HttpCallDemoComponent implements OnInit {


  errorMessage:String= '';
  isLoading:boolean = false;


  users:any[]  =[];

  constructor( private http:HttpClient ) { }

  ngOnInit(): void {
    this.getDATAfromServer();
  }


  getDATAfromServer(){

    this.isLoading = true;

 

    this.http.get('https://jsonplaceholder.typicode.com/users').toPromise().then((data:any)=>{


    console.log(data);

    this.users = data;
    
    }).catch((error)=>{
      this.errorMessage = 'Something went wrong please try again.';
    }).finally(()=>{


      this.isLoading = false;
    })
  }

}

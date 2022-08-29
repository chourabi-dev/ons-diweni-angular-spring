import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

              // injection !!
  constructor(private router:Router) { }

  ngOnInit(): void {
  }


  connect(){
    // coonnection server 
    // username password ...
    // serevr => token !!

    localStorage.setItem('ines-token','123');


    // redirect to home !! 

    this.router.navigateByUrl('/home');
  }
}

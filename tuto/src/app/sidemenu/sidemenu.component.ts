import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {


  menus:any[] = [
    { title:"Home", descreption:"this is the link to home page" },
    { title:"About", descreption:"this is the link to home page" },
    { title:"Profile", descreption:"this is the link to home page" },
    { title:"Contact us", descreption:"this is the link to home page" },
    { title:"Logout", descreption:"this is the link to home page" },
    
  ]


  constructor() { }

  ngOnInit(): void {
  }

}

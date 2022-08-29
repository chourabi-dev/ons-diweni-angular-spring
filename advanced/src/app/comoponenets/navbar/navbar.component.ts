import { Component, OnInit } from '@angular/core';
import { PanierService } from 'src/app/panier.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  list:any[] = [];

  constructor( private panier:PanierService ) { 
    // ....
  }

  ngOnInit(): void {
    this.list = this.panier.panier;
  }

}

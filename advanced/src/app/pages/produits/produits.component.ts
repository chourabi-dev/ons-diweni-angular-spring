import { Component, OnInit } from '@angular/core';
import { PanierService } from 'src/app/panier.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  produits:any[] = [
    { id:1, title:"Samsung S21" },
    { id:2, title:"HP pavillion" },
    { id:3, title:"MacBook air" },
    
  ]
  constructor( private panier:PanierService ) { }

  ngOnInit(): void {
  }

  add(produit){
    this.panier.addTooShopingCart(produit);
  }

}

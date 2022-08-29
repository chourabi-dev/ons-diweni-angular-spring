import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PanierService {


  panier:any[] = [];
  constructor() { }


  addTooShopingCart(produit:any){
    this.panier.push(produit);
  }


}

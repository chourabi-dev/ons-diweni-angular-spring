import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produit-details',
  templateUrl: './produit-details.component.html',
  styleUrls: ['./produit-details.component.css']
})
export class ProduitDetailsComponent implements OnInit {

  id:any;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {

    // execution automatic !!!

    const tmp = this.route.snapshot.params.id;

    this.id = tmp;
    

  }

}

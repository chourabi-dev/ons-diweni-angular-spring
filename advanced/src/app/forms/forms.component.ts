import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {


  productForm = new FormGroup({
    title: new FormControl('' , [ Validators.required , Validators.minLength(3) ]  ),
    price: new FormControl("", Validators.required),
    quantity: new FormControl('',Validators.required),
    provider: new FormControl('', [Validators.email,Validators.required] ), // not required but if user typein something it must be an email
    
    
  })

  constructor() { }

  ngOnInit(): void {
    console.log(this.productForm);
    
  }


  addProduct(){
    // get the data from the form !!

    const data = this.productForm.value;


    console.log(data);
    
  }
}

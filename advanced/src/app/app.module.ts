import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitsComponent } from './pages/produits/produits.component';
import { PanierComponent } from './pages/panier/panier.component';
import { NavbarComponent } from './comoponenets/navbar/navbar.component';
import { MydatepipePipe } from './mydatepipe.pipe';
import { EmailpipePipe } from './emailpipe.pipe';
import { FormsComponent } from './forms/forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewTypesComponent } from './new-types/new-types.component';
import { HttpCallDemoComponent } from './http-call-demo/http-call-demo.component';


import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ProduitsComponent,
    PanierComponent,
    NavbarComponent,
    MydatepipePipe,
    EmailpipePipe,
    FormsComponent,
    NewTypesComponent,
    HttpCallDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

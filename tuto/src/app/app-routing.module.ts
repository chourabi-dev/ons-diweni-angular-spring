import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';


const routes: Routes = [
  { path:'', component: HomePageComponent },
  { path:'home', component: HomePageComponent },
  { path:'about-us', component: AboutUsPageComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

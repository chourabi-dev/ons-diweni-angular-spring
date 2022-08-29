import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';
import { AuthComponent } from './pages/auth/auth.component';
import { HistoricComponent } from './pages/historic/historic.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { OurTeamComponent } from './pages/our-team/our-team.component';
import { ProduitDetailsComponent } from './pages/produit-details/produit-details.component';


const routes: Routes = [
  { path:'', component: HomePageComponent , canActivate:[AuthGuard]  },
  { path:'home', component: HomePageComponent , canActivate:[AuthGuard] },

  { path:'about-us', canActivate:[AuthGuard] , component: AboutUsPageComponent, children:[

    { path:'team', component:OurTeamComponent }, // router-outlet is required !!
    { path:'historic', component:HistoricComponent },
    

  ] },


  { path:'product/details/:id', component:ProduitDetailsComponent, canActivate:[AuthGuard] },

  

  { path:'auth', component:AuthComponent },

  

  // wild card !! 
  { path:'**', component:NotFoundComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

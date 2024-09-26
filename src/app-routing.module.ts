import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../src/app/home/home.component';

import { RechercheResultsComponent } from '../src/app/recherche-results/recherche-results.component';

import { BatimentComponent } from '../src/app/batiment/batiment.component';
import { ServicesComponent } from '../src/app/services/services.component';
import { FabricationComponent } from '../src/app/fabrication/fabrication.component';
import { AlimentaireComponent } from '../src/app/alimentaire/alimentaire.component';

import { ListeArtisansComponent } from '../src/app/liste-artisans/liste-artisans.component';
import { DetailArtisanComponent } from '../src/app/detail-artisan/detail-artisan.component';

import { MentionsLegalesComponent } from '../src/app/mentions-legales/mentions-legales.component';
import { AccessibiliteComponent } from '../src/app/accessibilites/accessibilites.component';
import { CookiesComponent } from '../src/app/cookies/cookies.component';
import { DonneesPersonnellesComponent } from '../src/app/donnees-personnelles/donnees-personnelles.component';

import { PageNotFoundComponent } from '../src/app/page-not-found/page-not-found.component';

const routes: Routes = [

  {path:"", component:HomeComponent},
//recherche resultatpage
  {path:"search", component: RechercheResultsComponent},

  {path:"batiment", component: BatimentComponent},
  {path:"services", component: ServicesComponent},
  {path:"fabrication", component: FabricationComponent},
  {path:"alimentaire", component: AlimentaireComponent},

  {path:"artisans", component: ListeArtisansComponent},
  {path:"artisan/:id" , component: DetailArtisanComponent},

  {path:"mentionsLegales", component: MentionsLegalesComponent},
  {path:"accessibilite", component: AccessibiliteComponent},
  {path: "cookies", component: CookiesComponent},
  {path:"donneesPersonnelles", component:DonneesPersonnellesComponent},

  {path:"**", component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

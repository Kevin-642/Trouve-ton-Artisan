import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { HomeComponent } from '../src/app/home/home.component';
import { HeaderComponent } from '../src/app/header/header.component';
import { FooterComponent } from '../src/app/footer/footer.component';
import { MentionsLegalesComponent } from '../src/app/mentions-legales/mentions-legales.component';
import { AccessibiliteComponent } from '../src/app/accessibilites/accessibilites.component';
import { CookiesComponent } from '../src/app/cookies/cookies.component';
import { DonneesPersonnellesComponent } from '../src/app/donnees-personnelles/donnees-personnelles.component';
import { BatimentComponent } from '../src/app/batiment/batiment.component';
import { ServicesComponent } from '../src/app/services/services.component';
import { FabricationComponent } from '../src/app/fabrication/fabrication.component';
import { AlimentaireComponent } from '../src/app/alimentaire/alimentaire.component';
import { TopArtisanPipe } from './top-artisan.pipe';
import { DetailArtisanComponent } from '../src/app/detail-artisan/detail-artisan.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListeArtisansComponent } from '../src/app/liste-artisans/liste-artisans.component';
import { PageNotFoundComponent } from '../src/app/page-not-found/page-not-found.component';
import { ArtisansDataServiceService } from './artisans-data-service.service';
import { RechercheResultsComponent } from '../src/app/recherche-results/recherche-results.component';
import { RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [

    HeaderComponent,
    FooterComponent,
    MentionsLegalesComponent,
    AccessibiliteComponent,
    CookiesComponent,
    DonneesPersonnellesComponent,
    TopArtisanPipe,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //formuaire
    ReactiveFormsModule,
    //Nav'Recherche'
    FormsModule
  ],

  providers: [ArtisansDataServiceService],

})
export class AppModule { }

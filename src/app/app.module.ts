import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { NavbarComponent } from './modules/navbar/navbar.component';
import { FooterComponent } from './modules/footer/footer.component';
import { OptionsComponent } from './modules/options/options.component';
import { Constantes } from './utils/constantes';
import { HomeComponent } from './modules/components/home/home.component';
import { PastComponent } from './modules/components/past/past.component';
import { DeathQuarterComponent } from './modules/components/deathQuarter/deathQuarter.component';
import { ModalComponent } from './modules/modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    OptionsComponent,
    HomeComponent,
    PastComponent,
    DeathQuarterComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [Constantes],
  bootstrap: [AppComponent]
})
export class AppModule { }

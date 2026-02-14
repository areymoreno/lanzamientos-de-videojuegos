import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { NavbarComponent } from './modules/navbar/navbar.component';
import { FooterComponent } from './modules/footer/footer.component';
import { Constantes } from './utils/constantes';
import { HomeComponent } from './modules/components/home/home.component';
import { ModalComponent } from './modules/modal/modal.component';
import { ProfileComponent } from './modules/components/profile/profile.component';
import { HolidayBannerComponent } from './modules/components/holiday-banner/holiday-banner.component';
import { QuotesBannerComponent } from './modules/components/quotes-banner/quotes-banner.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ProfileComponent,
    ModalComponent,
    HolidayBannerComponent,
    QuotesBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [Constantes],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

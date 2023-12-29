import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { NavbarComponent } from './modules/navbar/navbar.component';
import { FooterComponent } from './modules/footer/footer.component';
import { OptionsComponent } from './modules/options/options.component';
import { Constantes } from './utils/constantes';
import { IndexComponent } from './modules/components/index/index.component';
import { PastComponent } from './modules/components/past/past.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    OptionsComponent,
    IndexComponent,
    PastComponent
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

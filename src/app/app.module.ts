import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { WeatherComponent } from './weather/weather.component';
import { MovieComponent } from './movie/movie.component';
import { CurrencyComponent } from './currency/currency.component';
import { AppRoutingModule } from './/app-routing.module';
 

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    WeatherComponent,
    MovieComponent,
    CurrencyComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule 
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

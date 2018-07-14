import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';

import { WeatherComponent } from './weather/weather.component';
import { MovieComponent } from './movie/movie.component';
import { CurrencyComponent } from './currency/currency.component';

const routes: Routes = [
  { path: 'weather', component: WeatherComponent },
  { path: 'movie', component: MovieComponent },
  { path: 'currency', component: CurrencyComponent }
];

@NgModule({
  exports: [RouterModule] ,
  imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule { }

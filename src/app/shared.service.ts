import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {WeatherDetails} from '../app/weather/weatherdetails'; 
import {MovieDetails} from '../app/movie/moviedetails';
import {CurrencyDetails} from '../app/currency/currencydetails'; 

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  weatherServiceURL:string;
  movieServiceURL: string;
  currencyServiceURL:string; 

  constructor(private http: HttpClient) {
    console.log('Shared services initialized..'); 
   } 

   getWeatherDetails(city){ 
    this.weatherServiceURL='https://query.yahooapis.com/v1/public/yql?q=select%20name%2C%20country%20from%20geo.places%20where%20text%3D%22'+city+'%2C%20ca%22&diagnostics=true&format=json';
    return this.http.get<WeatherDetails>(this.weatherServiceURL);     
  }   

  getCurrencyDetails(cur)
  { 
    if(cur =='' || cur==null ){
      this.currencyServiceURL='http://data.fixer.io/api/latest?access_key=93367f3671bcddc3be0e72d0e89957ab'; 
    }
    else{
      this.currencyServiceURL='http://data.fixer.io/api/latest?access_key=93367f3671bcddc3be0e72d0e89957ab&symbols='+cur; 
    }   
 
    return this.http.get<CurrencyDetails>(this.currencyServiceURL);   
  } 

  getMovieDetails(title)
  { 
    this.movieServiceURL='http://www.omdbapi.com/?t=%27'+title+'%27&apikey=8b8b3f2'; 
    return this.http.get<MovieDetails>(this.movieServiceURL);   
  } 



  // messages: string[] = [];
 
  // add(message: string) {
  //   this.messages.push(message);
  //   console.log(this.messages);
  // }
 
  // clear() {
  //   this.messages = [];
  // } 
}

 
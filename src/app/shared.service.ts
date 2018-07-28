import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {WeatherDetails} from '../app/weather/weatherdetails'; 
import {MovieDetails} from '../app/movie/moviedetails';
import {CurrencyDetails} from '../app/currency/currencydetails'; 
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


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

   getWeatherDetails(city, state){ 
    //this.weatherServiceURL='https://query.yahooapis.com/v1/public/yql?q=select%20name%2C%20country%20from%20geo.places%20where%20text%3D%22'+city+'%2C%20ca%22&diagnostics=true&format=json';
    this.weatherServiceURL='https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22'+city+'%2C%20'+state+'%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';
    return this.http.get<WeatherDetails>(this.weatherServiceURL);     
  }   

    /** GET: add a new hero to the server */
    getWeatherDetails2 (city: String): Observable<WeatherDetails> {
      return this.http.get<WeatherDetails>(this.weatherServiceURL).pipe(
        tap((weatherDetails: WeatherDetails) => this.log(`added WeatherDetails w/ id=${weatherDetails.query}`)),
        catchError(this.handleError<WeatherDetails>('getWeatherDetails'))
      );
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

/**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(`HeroService: ${message}`);
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

 
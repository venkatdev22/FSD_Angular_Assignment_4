import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../app/shared.service';
import { WeatherDetails } from '../weather/weatherdetails';
import { Place } from '../weather/weatherdetails';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
 
  city:string;
  country:string;

  constructor(public sharedService: SharedService) {
    sharedService.getWeatherDetails('san%20francisco').subscribe(p => { 
      //Log weather service API response  
      // console.log(p.query.results.place);
      // this.weatherDetail = p; 
      // this.cityDetail=p.query.results.place
    }); 
  }

  ngOnInit() {
  }

  onClickWeatherSubmit(city: string)
  { 
    //console.log(city); 
    this.sharedService.getWeatherDetails2('san%20francisco').subscribe(p => { 
      //Log weather service API response  
      this.country=p.query.results.place.country.content ; 
      this.city=p.query.results.place.name;
    });  
  }

  getHeroes(city: string): Observable<string> { 
    return of(this.city);
  }

}


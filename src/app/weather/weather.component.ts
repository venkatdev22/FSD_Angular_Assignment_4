import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../app/shared.service';
import { WeatherDetails } from '../weather/weatherdetails'; 
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
 
  city:string;
  state:string;
  country:string;
  condition:string;
  temperature:string;

  constructor(public sharedService: SharedService) {
    
  }

  ngOnInit() {
  }

  onClickWeatherSubmit(city: string, statecode:string)
  {  
    this.sharedService.getWeatherDetails(city,statecode).subscribe(p => { 
      //Log weather service API response  
      this.country=p.query.results.channel.location.country  ; 
      this.city=p.query.results.channel.location.city ;
      this.state=p.query.results.channel.location.region ;
      this.condition=p.query.results.channel.item.condition.text;  
      this.temperature =p.query.results.channel.item.condition.temp ;
    });  
  }

  // getHeroes(city: string): Observable<string> { 
  //   return of(this.city);
  // }

}


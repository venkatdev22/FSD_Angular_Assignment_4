import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../app/shared.service';
import { WeatherDetails } from '../weather/weatherdetails';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weatherDetail: WeatherDetails;
  constructor(public sharedService: SharedService) {
    sharedService.getWeatherDetails('san%20francisco').subscribe(p => {

      //Log weather service API response  
      console.log(p.query.results.place);
      this.weatherDetail = p; 
    });

  }

  ngOnInit() {
  }

}


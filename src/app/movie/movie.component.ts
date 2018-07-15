import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../app/shared.service';
import { MovieDetails } from '../movie/moviedetails';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movieDetails: MovieDetails;

  constructor(public sharedService: SharedService) {

    sharedService.getMovieDetails('rings').subscribe(m => {
      //Log movie service API response
      console.log(m);
      this.movieDetails = m;
    });

  }

  ngOnInit() {
  }

}

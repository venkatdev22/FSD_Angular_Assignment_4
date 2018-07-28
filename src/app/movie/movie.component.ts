import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../app/shared.service';
import { MovieDetails } from '../movie/moviedetails';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  
  title: string;
  boxOffice:string;
  released:string;

  constructor(public sharedService: SharedService) {

    // sharedService.getMovieDetails('rings').subscribe(m => {
    //   //Log movie service API response
    //   console.log(m);
    //   this.movieDetails = m;
    // });

  }

  onClickMovieSubmit(title: string){
    this.sharedService.getMovieDetails(title).subscribe(m => {
      //Log movie service API response 
      this.title  = m.Title;
      this.boxOffice=m.BoxOffice;
      this.released=m.Released;
    });
  }

  ngOnInit() {
  }

}

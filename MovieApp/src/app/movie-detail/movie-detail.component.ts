import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  @Input() movie :  any;
  constructor(
    private movieService:MovieService,
    private route:ActivatedRoute,
    private location:Location) {
     }

  ngOnInit(): void {
    this.getMovie();
    this.save();
  }
  getMovie():void{
    const id = this.route.snapshot.paramMap.get("id");
    if(id != null) {
      this.movieService.getMovie(+id).subscribe(movie=>this.movie=movie);
    }
  }
  save():void{
      this.movieService.update(this.movie).subscribe(() => {this.location.back();});
  }
}

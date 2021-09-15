import { analyzeAndValidateNgModules } from "@angular/compiler";
import { Location } from '@angular/common';
import { Component } from "@angular/core";
import { Movie } from "../movie";
import { MovieService } from "../movie.service";

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  title = 'Movie List';
  movies:any;
  m:any;
  movie1:Movie= new Movie();
  constructor(private movieService: MovieService, private location:Location) { };
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getMovies();
    this.onSelect(this.movie1);
  }

  selectedMovie: any;
  onSelect(movie: any): void {
    this.selectedMovie = movie;
  }
  getMovies(): void {
    this.movieService.getMovies().subscribe(movies => {
      this.movies = movies
    });
  }
  add(name:string,imageUrl:string,description:string):void{
    this.movieService.add({name,imageUrl,description} as Movie).subscribe(movie=>this.movies.push(movie));
  }
  delete(movie:Movie):void{
    //this.movies = this.movies.filter(m =>m !== movie);
    this.movieService.delete(movie).subscribe(() => {this.location.back();});
  }
}

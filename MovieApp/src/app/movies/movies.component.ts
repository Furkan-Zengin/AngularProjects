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
  constructor(private movieService: MovieService) { };
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getMovies();
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
}

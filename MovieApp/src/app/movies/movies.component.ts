import { Component } from "@angular/core";
import { Movie } from "../movie";
import  {Movies} from "../movie.datasource";

@Component({
  selector:'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent{
 title =  'Movie List';
 movies=Movies;
 selectedMovie : Movie = new Movie(1,"Movie 1");
 onSelect(movie:Movie):void{
  this.selectedMovie = movie;
 }
}

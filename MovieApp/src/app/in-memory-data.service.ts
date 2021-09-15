import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import  {Movie} from "./movie";
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb(){
      const movies:Movie[] = [
      {id:1,name:"Movie 1",description:"Güzel Film 1",imageUrl:"1.jpg"},
      {id:2,name:"Movie 2",description:"Güzel Film 2",imageUrl:"2.jpg"},
      {id:3,name:"Movie 3",description:"Güzel Film 3",imageUrl:"3.jpg"},
      {id:4,name:"Movie 4",description:"Güzel Film 4",imageUrl:"4.jpg"},
      {id:5,name:"Movie 5",description:"Güzel Film 5",imageUrl:"5.jpg"},
      {id:6,name:"Movie 6",description:"Güzel Film 6",imageUrl:"6.jpg"},
      {id:7,name:"Movie 7",description:"Güzel Film 7",imageUrl:"7.jpg"}]
      return {movies};
  }
  constructor() { }
}

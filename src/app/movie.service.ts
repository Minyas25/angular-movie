import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from './entities';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) { }

  fetchAll() {
    return this.http.get<Movie[]>(environment.serverUrl+'/api/movie')
    //pfff
    // .pipe(map(data => data.map(item => ({...item, released:item.released.substring(0,10)}))));
  }

  fetchOne(id:any) {
    return this.http.get<Movie>(environment.serverUrl+'/api/movie/'+id)
    ;

  }

  search(term:string) {
    return this.http.get<Movie[]>(environment.serverUrl+'/api/movie/search/'+term)
  }

  add(movie:Movie) {
    return this.http.post<Movie>(environment.serverUrl+'/api/movie', movie);
  }

  delete(id:number) {
    return this.http.delete<void>(environment.serverUrl+'/api/movie/'+id);

  }

  update(movie:Movie) {
    return this.http.patch<Movie>('http://localhost:8000/api/movie/'+movie.id, movie);
  }
}

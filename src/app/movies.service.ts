import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, first, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  getMovie(ID: string): Observable<Object> {
    return this.http.get(`http://www.omdbapi.com/?i=${ID}&apikey=225d922`)
  }

  fetchMovies() {
    return this.http.get('http://www.omdbapi.com/?s=lion&apikey=225d922').pipe(first(), map(v => v['Search']))
  }

  constructor(private http: HttpClient) { }
}

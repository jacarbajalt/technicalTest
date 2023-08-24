import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {

  private apiKey: string = "899d89ac2d14c2ff9d420d753cd6cfe0";
  private baseUrl = 'https://api.themoviedb.org/3';
  private language: string = "es-ES";

  constructor(private http: HttpClient) { }

  getNowPlayingMovies() {
    return this.http.get(`${this.baseUrl}/movie/now_playing?api_key=${this.apiKey}&language=${this.language}`);
  }
}

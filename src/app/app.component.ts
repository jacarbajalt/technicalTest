import { Component, OnInit } from '@angular/core';
//Importar el servicio creado
import { TmdbService } from './tmdb.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PruebaTecnicaSkyTex';
  movies: any[] = [];

  constructor(private tmdbService: TmdbService, private modalService: NgbModal) {}

  ngOnInit() {
    this.tmdbService.getNowPlayingMovies().subscribe((data: any) => {
      this.movies = data.results.slice(0, 20);
    });
  }
  getPosterUrl(posterPath: string): string {
    return `https://image.tmdb.org/t/p/w300${posterPath}`;
  }
  openMovieDetails(movie: any) {
    const modalRef = this.modalService.open(MovieDetailsComponent);
    modalRef.componentInstance.movie = movie;
  }
}

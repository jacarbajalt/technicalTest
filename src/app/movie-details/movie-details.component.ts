import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-movie-details',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">{{ movie.title }}</h4>
      <button type="button" class="close" aria-label="Close" (click)="modal.dismiss()">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <img [src]="getPosterUrl(movie.poster_path)" alt="{{ movie.title }}" class="img-fluid mb-3" />
      <p>{{ movie.overview }}</p>
    </div>
  `
})
export class MovieDetailsComponent {  
  @Input() movie: any;

  constructor(public modal: NgbActiveModal) { }

  getPosterUrl(posterPath: string): string {
    return `https://image.tmdb.org/t/p/w300${posterPath}`;
  }
}

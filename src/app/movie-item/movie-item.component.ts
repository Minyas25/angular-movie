import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from '../entities';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent {
  @Input({required:true})
  movie:Movie;
  serverUrl = environment.serverUrl;

  @Output()
  delete = new EventEmitter<Movie>();

  buttonPressed() {
    this.delete.emit(this.movie);
  }
}

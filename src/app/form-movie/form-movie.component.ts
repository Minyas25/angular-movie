import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from '../entities';

@Component({
  selector: 'app-form-movie',
  templateUrl: './form-movie.component.html',
  styleUrls: ['./form-movie.component.css']
})
export class FormMovieComponent {
  @Input()
  movie:Movie = {title: '', resume:'', released: '', duration: 0};

  @Output()
  added = new EventEmitter<Movie>();

  handleImage(event:Event ) {
    const target = event.target as HTMLInputElement;
    if(target.files) {
      const reader = new FileReader();
      reader.readAsDataURL(target.files[0]);
      reader.onload =  () => {
        this.movie.picture = reader.result as string;
      };
    }
  }
  
  handleSubmit() {
     this.added.emit(this.movie);
  }

}

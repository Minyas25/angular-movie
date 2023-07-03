import { Component } from '@angular/core';
import { Movie } from '../entities';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  list:Movie[] = [
    {id:1, title: 'Test', resume: 'test', released: '2021-01-03', duration:200}
  ];
}

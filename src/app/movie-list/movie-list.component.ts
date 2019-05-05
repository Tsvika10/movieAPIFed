import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movieList: Array<string>;

  @Input()
  set list(list: Array<string>) {
    console.log(12345);
    this.movieList = list;
  }
  @Output() editMovie: EventEmitter<string> = new EventEmitter();
  @Output() deleteMovie: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onEdit(ID) {
    this.editMovie.emit(ID)
  }

  onDelete(ID) {
    this.deleteMovie.emit(ID)
  }

}

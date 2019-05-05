import { Component, OnInit } from '@angular/core';
import { MoviesService } from './movies.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  movieList = [];

  constructor(public movieService: MoviesService, public dialog: MatDialog, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.movieService.fetchMovies().subscribe(v => {
      this.movieList = [...v];
      for (let i = 0; i < this.movieList.length; i++) {
        this.movieService.getMovie(this.movieList[i]['imdbID']).subscribe(v => {
          this.movieList[i] = v;
          this.movieList = [...this.movieList];
          console.log(this.movieList)
        });
      }
    })
  }

  onAddMovie() {
    const addDialogRef = this.dialog.open(EditDialogComponent, {
      width: '400px',
      data: {
        mode: 'Add', movie: {
          imdbID: '',
          Title: '',
          Year: '',
          Runtime: '',
          Genre: '',
          Director: '',
        }
      }
    });
    addDialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (this.movieList.find(v => v['Title'] === result['Title'] && v['imdbID'] !== result['imdbID'])) {
          this.snackBar.open('A movie with the same title aleardy exists')
        } else {
          this.movieList.unshift(result);
          this.movieList = [...this.movieList]
        }
      }
    });
  }

  editMovie(ID) {
    console.log(this.movieList.find(v => v['imdbID'] === ID));
    const editDialogRef = this.dialog.open(EditDialogComponent, {
      width: '400px',
      data: { mode: 'Edit', movie: { ...this.movieList.find(v => v['imdbID'] === ID) } }
    });

    editDialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (this.movieList.find(v => { return v['Title'] === result['Title'] && v['imdbID'] !== result['imdbID'] })) {
          this.snackBar.open('A movie with the same title aleardy exists', null, { duration: 2000 })
        } else {
          for (let i = 0; i < this.movieList.length; i++) {
            if (this.movieList[i]['imdbID'] === result['imdbID']) {
              this.movieList[i] = { ...result };
              this.movieList = [...this.movieList];
              console.log(this.movieList)
              break;
            }
          }
        }
      }
    });
  }

  deleteMovie(ID) {
    const deleteDialogRef = this.dialog.open(DeleteDialogComponent, { width: '300px' });
    deleteDialogRef.afterClosed().subscribe(result => {
      if (result) {
        for (let i = 0; i < this.movieList.length; i++) {
          if (this.movieList[i]['imdbID'] === ID) {
            this.movieList.splice(i, 1)
            this.movieList = [...this.movieList]
            break;
          }
        }
      }
    })

  }
}

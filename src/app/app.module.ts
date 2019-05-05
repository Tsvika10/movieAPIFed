import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MatComponentsModule } from './mat-components/mat-components.module';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { CapitalizePipe } from './capitalize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    EditDialogComponent,
    DeleteDialogComponent,
    CapitalizePipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatComponentsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [EditDialogComponent, DeleteDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

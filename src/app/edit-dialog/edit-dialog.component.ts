import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent implements OnInit {

  movieForm: any;
  formMode: string = 'Edit'

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.movieForm = this.formBuilder.group({
      'Title': ['', [Validators.required]],
      'Year': ['', [Validators.required, Validators.pattern(/^\d{4}$/)]],
      'Runtime': ['', [Validators.required]],
      'Genre': ['', [Validators.required]],
      'Director': ['', [Validators.required]],
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

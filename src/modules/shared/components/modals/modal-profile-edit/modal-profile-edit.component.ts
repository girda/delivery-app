import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-modal-profile-edit',
  templateUrl: './modal-profile-edit.component.html',
  styleUrls: ['./modal-profile-edit.component.scss']
})
export class ModalProfileEditComponent implements OnInit {

  form: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private dialogRef: MatDialogRef<ModalProfileEditComponent>) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      firstName: new FormControl(null, [Validators.minLength(2)]),
      lastName: new FormControl(null, [Validators.minLength(2)]),
      email: new FormControl(null, [Validators.email])
    });
  }

  closeModal(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    console.log(this.form.value);
  }
}

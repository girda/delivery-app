import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-modal-basket',
  templateUrl: './modal-basket.component.html',
  styleUrls: ['./modal-basket.component.scss']
})
export class ModalBasketComponent implements OnInit, OnDestroy {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<ModalBasketComponent>) { }

  ngOnInit(): void {
    console.log(this.dialogRef.componentInstance)
  }

  closeModal(): void {
    this.dialogRef.close();
  }

  ngOnDestroy(): void {
    // this.dialogRef.componentInstance.dispose();
  }

}

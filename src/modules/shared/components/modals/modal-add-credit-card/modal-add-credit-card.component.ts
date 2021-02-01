import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-modal-add-credit-card',
  templateUrl: './modal-add-credit-card.component.html',
  styleUrls: ['./modal-add-credit-card.component.scss']
})
export class ModalAddCreditCardComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<ModalAddCreditCardComponent>) { }

  ngOnInit(): void {
  }

  closeModal(): void {
    this.dialogRef.close();
  }

}

import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-modal-product-menu',
  templateUrl: './modal-product-menu.component.html',
  styleUrls: ['./modal-product-menu.component.scss']
})
export class ModalProductMenuComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private dialogRef: MatDialogRef<ModalProductMenuComponent>
  ) {}

  ngOnInit(): void {
  }

  closeModal(): void {
    this.dialogRef.close();
  }

  scrollToProduct(id): void {
    this.dialogRef.close();
    this.dialogRef.afterClosed().subscribe(
      () => {
        document.getElementById(id).scrollIntoView();
        window.scrollBy(0, -50); // y: -50 - высота хедера
      }
    );
  }

}

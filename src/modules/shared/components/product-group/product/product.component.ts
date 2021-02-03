import {Component, Input, OnInit} from '@angular/core';
import {ModalProfileEditComponent} from '../../modals/modal-profile-edit/modal-profile-edit.component';
import {ModalProductComponent} from '../../modals/modal-product/modal-product.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: any;

  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  openProduct(e, product): void {
    this.matDialog.open(ModalProductComponent, {
      height: '85vh',
      data: {title: 'Редактировать профиль', product}
    });
    console.log(product);
  }

}

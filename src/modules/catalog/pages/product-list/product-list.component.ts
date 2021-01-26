import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ModalProductMenuComponent} from "../../../shared/components/modals/modal-product-menu/modal-product-menu.component";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @ViewChild('buttonMenuText') buttonMenuText: ElementRef;

  constructor(public matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  fixedBtn(e): void {
    if (window.pageYOffset >= 300) {
      this.buttonMenuText.nativeElement.style.display = 'none';
    } else {
      this.buttonMenuText.nativeElement.style.display = 'block';
    }
  }

  openMenu(): void {
    this.matDialog.open(ModalProductMenuComponent, {data: {title: 'Меню'}});
  }

}

import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ModalProductMenuComponent} from "../../../shared/components/modals/modal-product-menu/modal-product-menu.component";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productListData = [
    {
      title: 'Вино', id: 1, list: [
        {
          name: 'Chianti Classico',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dignissimos dolorem, enim fuga ipsam molestias odio soluta suscipit tempora vitae!',
          price: '$256'
        },
        {
          name: 'Gran Selezione',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dignissimos dolorem, enim fuga ipsam molestias odio soluta suscipit tempora vitae!',
          price: '$256'
        }
      ]
    },
    {
      title: 'Пиво', id: 2, list: [
        {
          name: 'Chianti Classico',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dignissimos dolorem, enim fuga ipsam molestias odio soluta suscipit tempora vitae!',
          price: '$256'
        },
        {
          name: 'Gran Selezione',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dignissimos dolorem, enim fuga ipsam molestias odio soluta suscipit tempora vitae!',
          price: '$256'
        },
        {
          name: 'Vigneto La Casuccia',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dignissimos dolorem, enim fuga ipsam molestias odio soluta suscipit tempora vitae!',
          price: '$256'
        },
        {
          name: 'Castello di Ama',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dignissimos dolorem, enim fuga ipsam molestias odio soluta suscipit tempora vitae!',
          price: '$256'
        }
      ]
    },
    {
      title: 'Виски', id: 3, list: [
        {
          name: 'Chianti Classico',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dignissimos dolorem, enim fuga ipsam molestias odio soluta suscipit tempora vitae!',
          price: '$256'
        },
        {
          name: 'Gran Selezione',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dignissimos dolorem, enim fuga ipsam molestias odio soluta suscipit tempora vitae!',
          price: '$256'
        },
        {
          name: 'Vigneto La Casuccia',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dignissimos dolorem, enim fuga ipsam molestias odio soluta suscipit tempora vitae!',
          price: '$256'
        }
      ]
    }
  ];

  @ViewChild('buttonMenuText') buttonMenuText: ElementRef;

  constructor(public matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  removeTextBtn(e): void {
    if (window.pageYOffset >= 300) {
      this.buttonMenuText.nativeElement.style.display = 'none';
    } else {
      this.buttonMenuText.nativeElement.style.display = 'block';
    }
  }

  openMenu(): void {
    this.matDialog.open(ModalProductMenuComponent, {data: {title: 'Меню', menuList: this.productListData}});
  }

}

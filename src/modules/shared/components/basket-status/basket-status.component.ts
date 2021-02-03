import {Component, Input, OnInit} from '@angular/core';
import {ModalBasketComponent} from '../modals/modal-basket/modal-basket.component';
import {MatDialog} from '@angular/material/dialog';
import {BasketService} from '../../services/basket.service';

@Component({
  selector: 'app-basket-status',
  templateUrl: './basket-status.component.html',
  styleUrls: ['./basket-status.component.scss']
})
export class BasketStatusComponent implements OnInit {

  @Input() colorIcon: string;
  @Input() colorBadge: string;

  constructor(private matDialog: MatDialog,
              public basketService: BasketService) { }

  ngOnInit(): void {
  }

  openBasket(): void {
    this.matDialog.open(ModalBasketComponent, {
      height: '100vh'
    });
  }

}

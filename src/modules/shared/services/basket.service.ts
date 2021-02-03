import {Injectable} from '@angular/core';
import {IBasket} from '../models/basket.model';
import {IProductItem} from '../models/product-item.model';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  basket: IBasket = {
    buyerId: '',
    items: []
  };

  constructor() {}

  addItemToBasket(productItem: IProductItem | any): void {
    this.basket.items.push(productItem);
  }

}

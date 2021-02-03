import {IBasketItem} from './basket-item.model';

export interface IBasket {
  items: IBasketItem[] | any;
  buyerId: string;
}

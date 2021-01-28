import {Injectable} from '@angular/core';
import {IBasket} from '../models/basket.model';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  basket: IBasket = {
    buyerId: '',
    items: []
  };

  constructor() {}



}

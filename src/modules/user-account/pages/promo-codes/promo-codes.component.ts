import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promo-codes',
  templateUrl: './promo-codes.component.html',
  styleUrls: ['./promo-codes.component.scss']
})
export class PromoCodesComponent implements OnInit {

  conditions = [
    {title: 'Заказ от 250 грн'},
    {title: 'Безналичного расчета'},
    {title: 'Также, 1 заказ = 1 промокод'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

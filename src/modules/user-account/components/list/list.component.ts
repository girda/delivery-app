import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  profileList = [
    {title: 'Мои адреса', icon: 'location', link: 'addresses'},
    {title: 'Мои платежные карты', icon: 'card', link: 'credit-card'},
    {title: 'Мои заказы', icon: 'basket', link: 'orders'},
    {title: 'Мои промокоды', icon: 'discount', link: 'promo-codes'},
    {title: 'Поддержка', icon: 'call', link: 'support'},
    {title: 'Оставить отзыв', icon: 'info', link: 'feedback'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ModalBasketComponent} from '../../../shared/components/modals/modal-basket/modal-basket.component';
declare var device;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  myDeviceData: string;

  catalogData = [
    {img: 'catalog-1.webp', title: 'Супермаркеты'},
    {img: 'catalog-2.webp', title: 'Кофе и десерты'},
    {img: 'catalog-3.webp', title: 'Экспресс Курьер'},
    {img: 'catalog-4.webp', title: 'Подарки'},
    {img: 'catalog-5.webp', title: 'Аптеки'},
    {img: 'catalog-6.webp', title: 'Еда'},
    // {img: 'catalog-7.webp', title: 'Что угодно'},
  ];

  constructor(public matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  showDeviceDetails(): void {
    this.myDeviceData = `cordova: ${device.cordova}<br>
                           model: ${device.model}<br>
                           platform: ${device.platform}<br>
                           uuid: ${device.uuid}<br>
                           version: ${device.version}<br>
                           isVirtual: ${device.isVirtual}<br>
                           serial: ${device.serial}<br>`;
  }

  openBasket(): void {
    this.matDialog.open(ModalBasketComponent, {
      height: '100vh'
    });
  }
}

import { Component, OnInit } from '@angular/core';
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

  constructor() { }

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

  showGeolocationDetails(): void {
    let p;
    const onSuccess = (position) => {
      alert(position.coords.latitude);
      alert('Latitude: '          + position.coords.latitude          + '\n' +
        'Longitude: '         + position.coords.longitude         + '\n' +
        'Altitude: '          + position.coords.altitude          + '\n' +
        'Accuracy: '          + position.coords.accuracy          + '\n' +
        'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
        'Heading: '           + position.coords.heading           + '\n' +
        'Speed: '             + position.coords.speed             + '\n' +
        'Timestamp: '         + position.timestamp                + '\n');
    };

    // onError Callback receives a PositionError object
    //
    const onError = (error) => {
      alert('code: '    + error.code    + '\n' +
        'message: ' + error.message + '\n');
    }

    try {

      navigator.geolocation.getCurrentPosition(onSuccess, onError);
    } catch (e) {
      alert(e.message);
    }

  }




}

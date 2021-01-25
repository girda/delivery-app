import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  profileList = [
    {title: 'Мои платежные карты', icon: 'card'},
    {title: 'Мои платежные карты', icon: 'card'},
    {title: 'Мои платежные карты', icon: 'card'},
    {title: 'Мои платежные карты', icon: 'card'},
    {title: 'Мои платежные карты', icon: 'card'},
    {title: 'Мои платежные карты', icon: 'card'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

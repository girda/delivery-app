import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-group',
  templateUrl: './product-group.component.html',
  styleUrls: ['./product-group.component.scss']
})
export class ProductGroupComponent implements OnInit {

  @Input() productGroup: any;

  constructor() { }

  ngOnInit(): void {
  }

}

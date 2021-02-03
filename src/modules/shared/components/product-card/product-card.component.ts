import {Component, Input, OnInit} from '@angular/core';
import {IProductItem} from '../../models/product-item.model';
import {ProductTranslationsService} from '../../services/product-translations.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product: IProductItem | any;

  constructor(public productTranslationsService: ProductTranslationsService) { }

  ngOnInit(): void {
  }

}

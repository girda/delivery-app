import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ModalProductMenuComponent} from "../../../shared/components/modals/modal-product-menu/modal-product-menu.component";
import {ModalBasketComponent} from '../../../shared/components/modals/modal-basket/modal-basket.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productListData = [
    {
      title: 'Вино', id: 1, list: [
        {
          name: 'Chianti Classico',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dignissimos dolorem, enim fuga ipsam molestias odio soluta suscipit tempora vitae!',
          price: '$256',
          countryTranslations: [
            {languageCode: 'en', name: 'Albania', fullName: 'Republic of Albania'},
            {languageCode: 'ru', name: 'Албания', fullName: 'Республика Албания'}
          ],
          productAttributesNamesValues: [
            {languageCode: 'ru', attributeName: 'Специальность', attributeValue: '3.1'},
            {languageCode: 'ru', attributeName: 'Подача', attributeValue: '16 °C'}
          ]
        },
        {
          name: 'Gran Selezione',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dignissimos dolorem, enim fuga ipsam molestias odio soluta suscipit tempora vitae!',
          price: '$256',
          countryTranslations: [
            {languageCode: 'en', name: 'Albania', fullName: 'Republic of Albania'},
            {languageCode: 'ru', name: 'Албания', fullName: 'Республика Албания'}
          ],
          productAttributesNamesValues: [
            {languageCode: 'ru', attributeName: 'Специальность', attributeValue: '3.1'},
            {languageCode: 'ru', attributeName: 'Подача', attributeValue: '16 °C'}
          ]
        }
      ]
    },
    {
      title: 'Пиво', id: 2, list: [
        {
          name: 'Chianti Classico',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dignissimos dolorem, enim fuga ipsam molestias odio soluta suscipit tempora vitae!',
          price: '$256',
          countryTranslations: [
            {languageCode: 'en', name: 'Albania', fullName: 'Republic of Albania'},
            {languageCode: 'ru', name: 'Албания', fullName: 'Республика Албания'}
          ],
          productAttributesNamesValues: [
            {languageCode: 'ru', attributeName: 'Специальность', attributeValue: '3.1'},
            {languageCode: 'ru', attributeName: 'Подача', attributeValue: '16 °C'}
          ]
        },
        {
          name: 'Gran Selezione',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dignissimos dolorem, enim fuga ipsam molestias odio soluta suscipit tempora vitae!',
          price: '$256',
          countryTranslations: [
            {languageCode: 'en', name: 'Albania', fullName: 'Republic of Albania'},
            {languageCode: 'ru', name: 'Албания', fullName: 'Республика Албания'}
          ],
          productAttributesNamesValues: [
            {languageCode: 'ru', attributeName: 'Специальность', attributeValue: '3.1'},
            {languageCode: 'ru', attributeName: 'Подача', attributeValue: '16 °C'}
          ]
        },
        {
          name: 'Vigneto La Casuccia',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dignissimos dolorem, enim fuga ipsam molestias odio soluta suscipit tempora vitae!',
          price: '$256',
          countryTranslations: [
            {languageCode: 'en', name: 'Albania', fullName: 'Republic of Albania'},
            {languageCode: 'ru', name: 'Албания', fullName: 'Республика Албания'}
          ],
          productAttributesNamesValues: [
            {languageCode: 'ru', attributeName: 'Специальность', attributeValue: '3.1'},
            {languageCode: 'ru', attributeName: 'Подача', attributeValue: '16 °C'}
          ]
        },
        {
          name: 'Castello di Ama',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dignissimos dolorem, enim fuga ipsam molestias odio soluta suscipit tempora vitae!',
          price: '$256',
          countryTranslations: [
            {languageCode: 'en', name: 'Albania', fullName: 'Republic of Albania'},
            {languageCode: 'ru', name: 'Албания', fullName: 'Республика Албания'}
          ],
          productAttributesNamesValues: [
            {languageCode: 'ru', attributeName: 'Специальность', attributeValue: '3.1'},
            {languageCode: 'ru', attributeName: 'Подача', attributeValue: '16 °C'}
          ]
        }
      ]
    },
    {
      title: 'Виски', id: 3, list: [
        {
          name: 'Chianti Classico',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dignissimos dolorem, enim fuga ipsam molestias odio soluta suscipit tempora vitae!',
          price: '$256',
          countryTranslations: [
            {languageCode: 'en', name: 'Albania', fullName: 'Republic of Albania'},
            {languageCode: 'ru', name: 'Албания', fullName: 'Республика Албания'}
          ],
          productAttributesNamesValues: [
            {languageCode: 'ru', attributeName: 'Специальность', attributeValue: '3.1'},
            {languageCode: 'ru', attributeName: 'Подача', attributeValue: '16 °C'}
          ]
        },
        {
          name: 'Gran Selezione',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dignissimos dolorem, enim fuga ipsam molestias odio soluta suscipit tempora vitae!',
          price: '$256',
          countryTranslations: [
            {languageCode: 'en', name: 'Albania', fullName: 'Republic of Albania'},
            {languageCode: 'ru', name: 'Албания', fullName: 'Республика Албания'}
          ],
          productAttributesNamesValues: [
            {languageCode: 'ru', attributeName: 'Специальность', attributeValue: '3.1'},
            {languageCode: 'ru', attributeName: 'Подача', attributeValue: '16 °C'}
          ]
        },
        {
          name: 'Vigneto La Casuccia',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dignissimos dolorem, enim fuga ipsam molestias odio soluta suscipit tempora vitae!',
          price: '$256',
          countryTranslations: [
            {languageCode: 'en', name: 'Albania', fullName: 'Republic of Albania'},
            {languageCode: 'ru', name: 'Албания', fullName: 'Республика Албания'}
          ],
          productAttributesNamesValues: [
            {languageCode: 'ru', attributeName: 'Специальность', attributeValue: '3.1'},
            {languageCode: 'ru', attributeName: 'Подача', attributeValue: '16 °C'}
          ]
        }
      ]
    }
  ];

  @ViewChild('buttonMenuText') buttonMenuText: ElementRef;

  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  removeTextBtn(e): void {
    if (window.pageYOffset >= 300) {
      this.buttonMenuText.nativeElement.style.display = 'none';
    } else {
      this.buttonMenuText.nativeElement.style.display = 'block';
    }
  }

  openMenu(): void {
    this.matDialog.open(ModalProductMenuComponent, {
      height: '85vh',
      data: {title: 'Меню', menuList: this.productListData}
    });
  }

}

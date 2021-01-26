import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @ViewChild('buttonMenuText') buttonMenuText: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  fixedBtn(e): void {
    if (window.pageYOffset >= 300) {
      this.buttonMenuText.nativeElement.style.display = 'none';
    } else {
      this.buttonMenuText.nativeElement.style.display = 'block';
    }
  }

}

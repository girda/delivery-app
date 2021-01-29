import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-account-pages-layout',
  templateUrl: './user-account-pages-layout.component.html',
  styleUrls: ['./user-account-pages-layout.component.scss']
})
export class UserAccountPagesLayoutComponent implements OnInit {

  title: string;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.title = this.route.snapshot.firstChild.data.title;
  }

}

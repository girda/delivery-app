import { Component, OnInit } from '@angular/core';
import {ModalProductMenuComponent} from '../../../shared/components/modals/modal-product-menu/modal-product-menu.component';
import {MatDialog} from '@angular/material/dialog';
import {ModalProfileEditComponent} from '../../../shared/components/modals/modal-profile-edit/modal-profile-edit.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  openProfileEdit(): void {
    this.matDialog.open(ModalProfileEditComponent, {
      height: '85vh',
      data: {title: 'Редактировать профиль'}
    });
  }

}

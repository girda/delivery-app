import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ModalConfirmComponent} from '../../../shared/components/modals/modal-confirm/modal-confirm.component';
import {ICreditCard} from '../../../shared/models/credit-card.model';
import {ModalAddCreditCardComponent} from '../../../shared/components/modals/modal-add-credit-card/modal-add-credit-card.component';

@Component({
  selector: 'app-credit-cards',
  templateUrl: './credit-cards.component.html',
  styleUrls: ['./credit-cards.component.scss']
})
export class CreditCardsComponent implements OnInit {

  creditCards: ICreditCard[] = [
    {number: '33•• •••• •••• 7777'},
    {number: '45•• •••• •••• 5656'},
    {number: '56•• •••• •••• 3456'},
  ]

  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  deleteCard(card: ICreditCard): void {
    this.matDialog.open(ModalConfirmComponent, {
      data: {
        title: `Вы действительно желаете удалить карту ${card.number}`
      }
    })
      .afterClosed()
      .subscribe(
        (confirm: boolean) => {
          console.log(confirm);
        }
      );
  }

  openModalAddCreditCard(): void {
    this.matDialog.open(ModalAddCreditCardComponent, {
      height: '90vh',
      data: {
        title: `Добавить карту`
      }
    });
  }

}

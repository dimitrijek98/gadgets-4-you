import { Action } from '@ngrx/store';
import { Card } from 'src/app/models/Card';

export enum CardActionTypes {
  Pay = '[Checkout] Pay',
  PaymentSuccess = '[Pay API] Payment Success',
  PaymentFail = '[Pay API] Payment Fail',
}

export class Pay implements Action {
  readonly type = CardActionTypes.Pay;
  constructor(public card: Card) { }
}

export class PaymentFail implements Action {
  readonly type = CardActionTypes.PaymentFail;
}

export class PaymentSuccess implements Action {
  readonly type = CardActionTypes.PaymentSuccess;
}


export type CardActions = Pay | PaymentFail | PaymentSuccess;

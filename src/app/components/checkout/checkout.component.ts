import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { isPaymentFail } from 'src/app/store/selectors/card.selector';
import { orderCost } from 'src/app/store/selectors/cart.selector';
import { Pay } from 'src/app/store/actions/card.actions';
import { Card } from 'src/app/models/Card';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cardNumber = new FormControl('', [Validators.required, Validators.maxLength(16), Validators.minLength(16)]);
  cvv = new FormControl('', [Validators.required, Validators.maxLength(3), Validators.minLength(3)]);

  paymentFail$: Observable<boolean>;
  orderCost$: Observable<number>;

  cost: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.paymentFail$ = this.store.pipe(
      select(isPaymentFail)
    );
    this.orderCost$ = this.store.pipe(
      select(orderCost)
    );
  }

  errorCardNumber() {
    return this.cardNumber.hasError('required') ? 'You must enter a value' :
      this.cardNumber.hasError('minlength') ? 'Card number must be 16 numbers long' :
      this.cardNumber.hasError('maxlength') ? 'Card number must be 16 numbers long' : '';
  }
  errorCvv() {
    return this.cvv.hasError('required') ? 'This field is required' :
    this.cardNumber.hasError('minlength') ? 'Card number must be 3 numbers long' :
    this.cardNumber.hasError('maxlength') ? 'Card number must be 3 numbers long' : '';
  }

  pay() {
    const cardNumber = this.cardNumber.value;
    const cvv = this.cvv.value;
    this.orderCost$.subscribe(cost => this.cost = cost);
    const card: Card = {
      number: cardNumber,
      cvv,
      money: this.cost
    };
    this.store.dispatch(new Pay(card));
  }
}

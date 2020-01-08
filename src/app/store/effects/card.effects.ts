import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Pay, CardActionTypes, PaymentSuccess, PaymentFail } from '../actions/card.actions';
import { mergeMap, map, tap } from 'rxjs/operators';
import { CardService } from 'src/app/services/card.service';
import { Router } from '@angular/router';

@Injectable()
export class CardEffects {

  @Effect()
  pay$ = this.actions$.pipe(
    ofType<Pay>(CardActionTypes.Pay),
    mergeMap(action =>
      this.cardService.pay(action.card)
    ),
    map(payment => {
      console.log(payment);
      if (payment) {
        return new PaymentSuccess();
      } else {
         return new PaymentFail();
      }
    })
  );

  @Effect({dispatch: false})
  paySuccess$ = this.actions$.pipe(
    ofType<PaymentSuccess>(CardActionTypes.PaymentSuccess),
    tap(() => {
      this.router.navigateByUrl('PaymentSuccess');
    })
  );

  constructor(private actions$: Actions, private cardService: CardService, private router: Router) {}

}

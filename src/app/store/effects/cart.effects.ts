import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, act } from '@ngrx/effects';
import { AddProduct, CartActionTypes, EmptyCart, AddManyToCart } from '../actions/cart.actions';
import { tap } from 'rxjs/operators';
import { Product } from 'src/app/models/Product';
import { defer, of } from 'rxjs';



@Injectable()
export class CartEffects {

  // @Effect()
  // init$ = defer(() => {
  //   const cart = localStorage.getItem('cart');
  //   console.log(cart)
  //   if (cart) {
  //     return of(new AddManyToCart(JSON.parse(cart)))
  //   }
  //   else {
  //     return of(new EmptyCart())
  //   }
  // })

  // @Effect({ dispatch: false })
  // addCart$ = this.actions$.pipe(
  //   ofType<AddProduct>(CartActionTypes.AddProduct),
  //   tap((action) => {
  //     let cartList: Product[] = [];
  //     cartList = JSON.parse(localStorage.getItem("cart"))
  //     if (cartList) {
  //       cartList.push(action.product);
  //       localStorage.setItem("cart", JSON.stringify(cartList));
  //     }
  //     else
  //       localStorage.setItem("cart", JSON.stringify(action.product));

  //   })
  // )

  constructor(private actions$: Actions) { }

}

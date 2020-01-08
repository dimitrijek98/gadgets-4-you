import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ProductActionTypes, RequestProduct, RequestAllProducts, LoadAllProducts } from '../actions/product.actions';
import { mergeMap, map, withLatestFrom, filter } from 'rxjs/operators';
import { ProductService } from 'src/app/services/product.service';
import { Store, select } from '@ngrx/store';
import { AppState } from '../reducers';
import { allProductsLoaded } from '../selectors/product.selector';



@Injectable()
export class ProductEffects {

  // @Effect()
  // loadProduct$ = this.actions$.pipe(
  //   ofType<RequestProduct>(ProductActionTypes.RequestProduct),
  //   mergeMap(action => this.productService.getAllProducts())
  // )

  @Effect()
  loadAllProducts = this.actions$.pipe(
    ofType<RequestAllProducts>(ProductActionTypes.RequestAllProducts),
    withLatestFrom(this.store.pipe(select(allProductsLoaded))),
    filter(([actions, allProductsLoaded]) => !allProductsLoaded),
    mergeMap(action => this.productService.getAllProducts()),
    map(products => new LoadAllProducts(products))
  );
  constructor(private actions$: Actions, private productService: ProductService, private store: Store<AppState>) { }

}

import { Action } from '@ngrx/store';
import { Product } from 'src/app/models/Product';

export enum ProductActionTypes {
  RequestProduct = '[Product Details] Request Product',
  LoadProduct = '[Request Product API] Load Product',
  RequestAllProducts = '[Store Page] Request All Products',
  LoadAllProducts = '[Request All Products API] Load All Products',

}

export class RequestProduct implements Action {
  readonly type = ProductActionTypes.RequestProduct;
}

export class LoadProduct implements Action {
  readonly type = ProductActionTypes.LoadProduct;
  constructor(public products: Product) { }
}

export class RequestAllProducts implements Action {
  readonly type = ProductActionTypes.RequestAllProducts;
}

export class LoadAllProducts implements Action {
  readonly type = ProductActionTypes.LoadAllProducts;
  constructor(public products: Product[]) { }
}


export type ProductActions = RequestProduct | LoadProduct | RequestAllProducts | LoadAllProducts;

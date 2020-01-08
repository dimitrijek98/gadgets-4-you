import { Action } from '@ngrx/store';
import { Product } from 'src/app/models/Product';

export enum CartActionTypes {
  AddProduct = '[Store] Add Product',
  AddManyToCart = '[Initialization] Add Many To Cart',
  RemoveProduct = '[Cart] Remove Product',
  EmptyCart = '[Cart] Empty cart',
}

export class AddProduct implements Action {
  readonly type = CartActionTypes.AddProduct;
  constructor(public product: Product) { }
}


export class AddManyToCart implements Action {
  readonly type = CartActionTypes.AddManyToCart;
  constructor(public products: Product[]) { }
}

export class RemoveProduct implements Action {
  readonly type = CartActionTypes.RemoveProduct;
  constructor(public productId: number) { }
}

export class EmptyCart implements Action {
  readonly type = CartActionTypes.EmptyCart;
}


export type CartActions = AddProduct | AddManyToCart | RemoveProduct | EmptyCart;

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartState } from '../reducers/cart.reducer';
import * as fromProducts from '../reducers/cart.reducer';

export const selectCartState = createFeatureSelector<CartState>('cart');

export const selectAllCartProducts = createSelector(
    selectCartState,
    fromProducts.selectAll
)

export const orderCost = createSelector(
    selectAllCartProducts,
    products => products.reduce((a,b) => a + b.price, 0)
)

import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import authReducer, { AuthState } from './auth.reducer';
import { ProductsState, productsReducers } from './product.reducer';
import { CartState, cartReducers } from './cart.reducer';
import cardReducer, { CardState } from './card.reducer';


export interface AppState {
  auth: AuthState;
  products: ProductsState;
  cart: CartState;
  card: CardState;
}

export const rootReducer: ActionReducerMap<AppState> = {
  auth: authReducer,
  products: productsReducers,
  cart: cartReducers,
  card: cardReducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];

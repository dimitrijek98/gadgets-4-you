import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity'
import { Product } from 'src/app/models/Product';
import { CartActionTypes, CartActions } from '../actions/cart.actions';

export interface CartState extends EntityState<Product> {
}

export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>();

export const initialCartState: CartState = adapter.getInitialState();

export function cartReducers(state: CartState = initialCartState, action: CartActions): CartState {
    switch (action.type) {
        case CartActionTypes.AddProduct: {
            return adapter.addOne(action.product, state);
        }
        case CartActionTypes.AddManyToCart: {
            return adapter.addAll(action.products, state);
        }
        case CartActionTypes.RemoveProduct:{
            return adapter.removeOne(action.productId, state);
        }
        case CartActionTypes.EmptyCart: {
            return adapter.removeAll(state);
        }
        default: {
            return state;
        }
    }

}

export const {
    selectAll
} = adapter.getSelectors();

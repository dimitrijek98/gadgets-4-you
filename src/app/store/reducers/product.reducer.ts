import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Product } from 'src/app/models/Product';
import { ProductActions, ProductActionTypes } from '../actions/product.actions';

export interface ProductsState extends EntityState<Product> {
    allProductsLoaded: boolean;
}

export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>();

export const initialProductsState: ProductsState = adapter.getInitialState({
    allProductsLoaded: false
});

export function productsReducers(state: ProductsState = initialProductsState, action: ProductActions): ProductsState {
    switch (action.type) {
        case ProductActionTypes.LoadAllProducts: {
            return adapter.addAll(action.products, {...state, allProductsLoaded: true});
        }
        default: {
            return state;
        }
    }

}

export const {
    selectAll
} = adapter.getSelectors();

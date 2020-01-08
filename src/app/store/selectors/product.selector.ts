import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductsState } from '../reducers/product.reducer';
import * as fromProducts from '../reducers/product.reducer';

export const selectProductsState = createFeatureSelector<ProductsState>('products');

export const selectProductById = (productId: number) => createSelector(
    selectProductsState,
    productsState => productsState.entities[productId]
);

export const selectAllProducts = createSelector(
    selectProductsState,
    fromProducts.selectAll
);

export const selectCategory = (categoryName: string) => createSelector(
    selectAllProducts,
    productsState => productsState.filter(product => product.category === categoryName)
);

export const allProductsLoaded = createSelector(
    selectProductsState,
    productState => productState.allProductsLoaded
);

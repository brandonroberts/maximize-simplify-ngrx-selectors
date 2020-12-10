import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromProducts from './products.reducer';

export const selectProductsState = createFeatureSelector<fromProducts.State>(
  fromProducts.productsFeatureKey
);

export const selectAllProducts = createSelector(
  selectProductsState,
  fromProducts.selectAll
);

export const selectCurrentProduct = createSelector(
  selectProductsState,
  fromProducts.selectCurrentProduct
);

export const selectProductsLoaded = createSelector(
  selectProductsState,
  fromProducts.selectProductsLoaded
);
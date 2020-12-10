import { createReducer, createSelector, on } from '@ngrx/store';

import { Product } from '../../models';

import * as ProductDetailsActions from '../../../product-details/product-details.actions';
import * as ProductsActions from './products.actions';

export const productsFeatureKey = 'products';

export interface State {
  collection: Product[];
  currentProductId: number;
  loaded: boolean;
}

export const initialState: State = {
  collection: [],
  currentProductId: null,
  loaded: false
};

export const reducer = createReducer(
  initialState,
  on(ProductsActions.loadProductsSuccess, (state, action) => ({
    ...state,
    collection: action.products,
    loaded: true
  })),
  on(ProductDetailsActions.enter, (state, action) => ({
    ...state,
    currentProductId: action.productId
  }))
);

export const selectAll = (state: State) => state.collection;
export const selectProductsLoaded = (state: State) => state.loaded;
export const selectCurrentProductId = (state: State) => state.currentProductId;
export const selectCurrentProduct = createSelector(
  selectAll,
  selectCurrentProductId,
  (products, currentProductId) => currentProductId ? products.find(product => product.id === currentProductId) : null
);
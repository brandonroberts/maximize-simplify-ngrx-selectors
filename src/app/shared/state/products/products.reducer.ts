import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, createSelector, on } from '@ngrx/store';

import { Product } from '../../models';

import * as ProductDetailsActions from '../../../product-details/product-details.actions';
import * as ProductsActions from './products.actions';

export const productsFeatureKey = 'products';

export interface State extends EntityState<Product> {
  currentProductId: number;
  loaded: boolean;
}

export const adapter = createEntityAdapter<Product>();

export const initialState = adapter.getInitialState({
  currentProductId: null,
  loaded: false
});

export const reducer = createReducer(
  initialState,
  on(ProductsActions.loadProductsSuccess, (state, action) => 
    adapter.setAll(action.products, { ...state, loaded: true })
  ),
  on(ProductDetailsActions.enter, (state, action) => ({
    ...state,
    currentProductId: action.productId
  }))
);

export const { selectAll, selectEntities } = adapter.getSelectors();
export const selectProductsLoaded = (state: State) => state.loaded;
export const selectCurrentProductId = (state: State) => state.currentProductId;
export const selectCurrentProduct = createSelector(
  selectEntities,
  selectCurrentProductId,
  (entities, currentProductId) => currentProductId ? entities[currentProductId] : null
);
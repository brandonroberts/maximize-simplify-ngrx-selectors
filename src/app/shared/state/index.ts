import { ActionReducerMap } from '@ngrx/store';

import { ProductsFeature } from './products';
import { CategoriesFeature } from './categories';

export interface State {
  products: ProductsFeature.State;
  categories: CategoriesFeature.State;
}

export const reducers: ActionReducerMap<State, any> = {
  products: ProductsFeature.reducer,
  categories: CategoriesFeature.reducer
};
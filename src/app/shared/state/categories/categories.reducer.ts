import { Category } from '../../models';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import * as CategoryActions from './categories.actions';

export const categoriesFeatureKey = 'categories';

export interface State extends EntityState<Category> {
  currentCategoryId: number;
  loaded: boolean;
}

export const adapter = createEntityAdapter<Category>();

export const initialState = adapter.getInitialState({
  currentCategoryId: null,
  loaded: false
});

export const reducer = createReducer(
  initialState,
  on(CategoryActions.loadCategoriesSuccess, (state, action) => 
    adapter.setAll(action.categories, { ...state, loaded: true })
  )
);

export const { selectAll, selectEntities } = adapter.getSelectors();
export const selectCategoriesLoaded = (state: State) => state.loaded;
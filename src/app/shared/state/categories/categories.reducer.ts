import { createReducer, createSelector, on } from '@ngrx/store';

import { Category } from '../../models';

import * as CategoriesActions from './categories.actions';

export const categoriesFeatureKey = 'categories';

export interface State {
  collection: Category[];
  currentCategoryId: number;
  loaded: boolean;
}

export const initialState: State = {
  collection: [],
  currentCategoryId: null,
  loaded: false
};

export const reducer = createReducer(
  initialState,
  on(CategoriesActions.loadCategoriesSuccess, (state, action) => ({
    ...state,
    collection: action.categories,
    loaded: true
  }))
);

export const selectAll = (state: State) => state.collection;
export const selectCategoriesLoaded = (state: State) => state.loaded;
export const selectCurrentCategoryId = (state: State) => state.currentCategoryId;
export const selectCurrentCategory = createSelector(
  selectAll,
  selectCurrentCategoryId,
  (categories, currentCategoryId) => currentCategoryId ? categories.find(category => category.id === currentCategoryId) : null
);
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCategories from './categories.reducer';

export const selectCategoriesState = createFeatureSelector<fromCategories.State>(
  fromCategories.categoriesFeatureKey
);

export const selectAllCategories = createSelector(
  selectCategoriesState,
  fromCategories.selectAll
);

export const selectAllCategoriesEntities = createSelector(
  selectCategoriesState,
  fromCategories.selectEntities
);

export const selectCategoriesLoaded = createSelector(
  selectCategoriesState,
  fromCategories.selectCategoriesLoaded
);
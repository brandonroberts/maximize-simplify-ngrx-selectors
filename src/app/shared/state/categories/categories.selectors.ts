import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Category } from '../../models';
import * as fromCategories from './categories.reducer';

export const selectCategoriesState = createFeatureSelector<fromCategories.State>(
  fromCategories.categoriesFeatureKey
);

export const selectAllCategories = createSelector(
  selectCategoriesState,
  fromCategories.selectAll
);

export const selectCategoriesLoaded = createSelector(
  selectCategoriesState,
  fromCategories.selectCategoriesLoaded
);

export const selectCategoriesDictionary = createSelector(
  selectAllCategories,
  categories => {
    let categoriesDictionary: { [id: number]: Category } = {};
    
    categories.forEach(category => {
      categoriesDictionary[category.id] = category;
    });

  return categoriesDictionary;
});
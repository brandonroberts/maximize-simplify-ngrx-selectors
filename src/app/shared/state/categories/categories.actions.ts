import { Category } from '../../models';

import { createAction, props } from '@ngrx/store';

export const loadCategories = createAction(
  '[Categories] Load Categories'
);

export const loadCategoriesSuccess = createAction(
  '[Categories/API] Load Categories Success',
  props<{ categories: Category[] }>()
);

export const loadCategoriesFailure = createAction(
  '[Categories/API] Load Categories Failure',
  props<{ error: any }>()
);

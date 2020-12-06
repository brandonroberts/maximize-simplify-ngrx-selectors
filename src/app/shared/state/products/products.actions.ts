import { Product } from '../../models';
import { createAction, props } from '@ngrx/store';

export const loadProductsSuccess = createAction(
  '[Products/API] Load Products Success',
  props<{ products: Product[] }>()
);

export const loadProductsFailure = createAction(
  '[Products/API] Load Products Failure',
  props<{ error: any }>()
);

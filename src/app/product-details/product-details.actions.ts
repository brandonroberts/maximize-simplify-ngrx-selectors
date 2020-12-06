import { createAction, props } from '@ngrx/store';

export const enter = createAction('[Product Details Page] enter', props<{ productId: number }>());
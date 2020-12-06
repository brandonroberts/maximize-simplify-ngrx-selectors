import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, exhaustMap, filter, withLatestFrom } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as CategoriesListActions from '../../../product-list/product-list.actions';
import * as CategoriesDetailsActions from '../../../product-details/product-details.actions';
import { CategoriesService } from '../../../categories.service';

import * as CategoriesActions from './categories.actions';
import * as CategoriesSelectors from './categories.selectors';

@Injectable()
export class CategoriesEffects {

  loadCategories$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CategoriesListActions.enter, CategoriesDetailsActions.enter),
      concatMap(action => of(action).pipe(withLatestFrom(this.store.select(CategoriesSelectors.selectCategoriesLoaded)))),
      filter(([_, loaded]) => !loaded),
      exhaustMap(() =>
        this.categoriesService.all().pipe(
          map(categories => CategoriesActions.loadCategoriesSuccess({ categories })),
          catchError(error => of(CategoriesActions.loadCategoriesFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions, private categoriesService: CategoriesService, private store: Store) {}

}

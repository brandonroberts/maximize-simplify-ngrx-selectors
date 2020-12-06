import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, concatMap, exhaustMap, withLatestFrom, filter } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as ProductsListActions from '../../../product-list/product-list.actions';
import * as ProductsDetailsActions from '../../../product-details/product-details.actions';
import { ProductsService } from '../../../products.service';

import * as ProductsActions from './products.actions';
import * as ProductsSelectors from './products.selectors';


@Injectable()
export class ProductsEffects {
  loadProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductsListActions.enter, ProductsDetailsActions.enter),
      concatMap(action => of(action).pipe(withLatestFrom(this.store.select(ProductsSelectors.selectProductsLoaded)))),
      filter(([_, loaded]) => !loaded),
      exhaustMap(() =>
        this.productsService.all().pipe(
          map(products => ProductsActions.loadProductsSuccess({ products })),
          catchError(error => of(ProductsActions.loadProductsFailure({ error }))))
      )
    );
  });

  constructor(
    private actions$: Actions,
    private productsService: ProductsService,
    private store: Store
  ) {}
}

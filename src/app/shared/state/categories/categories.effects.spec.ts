import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CategoriesEffects } from './categories.effects';

describe('CategoriesEffects', () => {
  let actions$: Observable<any>;
  let effects: CategoriesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CategoriesEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(CategoriesEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});

import * as fromProducts from './products.reducer';
import { selectProductsState } from './products.selectors';

describe('Products Selectors', () => {
  it('should select the feature state', () => {
    const result = selectProductsState({
      [fromProducts.productsFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});

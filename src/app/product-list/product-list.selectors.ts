import { createSelector } from '@ngrx/store';

import { CategoriesSelectors } from '../shared/state/categories';
import { ProductsSelectors } from '../shared/state/products';

export const ready = createSelector(
  ProductsSelectors.selectProductsLoaded,
  CategoriesSelectors.selectCategoriesLoaded,
  (productsLoaded, categoriesLoaded) => [productsLoaded, categoriesLoaded].every(loaded => loaded === true)
);

export const products = createSelector(
  ProductsSelectors.selectAllProducts,
  CategoriesSelectors.selectAllCategoriesEntities,
  (products, categoriesEntities) => {
    return products.map(product => {
      return {
        ...product,
        title: `${product.name} details`,
        category: categoriesEntities[product.categoryId] ? categoriesEntities[product.categoryId].name : ''
      };
    })
  }  
);

export const productListViewModel = createSelector(
  ready,
  products,
  (ready, products) => ({ ready, products })
);
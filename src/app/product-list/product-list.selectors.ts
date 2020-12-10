import { createSelector } from '@ngrx/store';

import { CategoriesSelectors } from '../shared/state/categories';
import { ProductsSelectors } from '../shared/state/products';

export const selectIsViewReady = createSelector(
  ProductsSelectors.selectProductsLoaded,
  CategoriesSelectors.selectCategoriesLoaded,
  (productsLoaded, categoriesLoaded) => [productsLoaded, categoriesLoaded].every(loaded => loaded === true)
);

export const selectProductsList = createSelector(
  ProductsSelectors.selectAllProducts,
  CategoriesSelectors.selectAllCategories,
  (products, categoriesEntities) => {
    return products.map(product => {
      return {
        ...product,
        title: `${product.name} details`,
        category: categoriesEntities.find(category => category.id === product.categoryId)?.name ||  ''
      };
    })
  }  
);

export const selectProductListViewModel = createSelector(
  selectIsViewReady,
  selectProductsList,
  (ready, products) => ({ ready, products })
);
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import * as ProductListSelectors from './product-list.selectors';
import * as ProductsListActions from './product-list.actions';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  vm$ = this.store.select(ProductListSelectors.productListViewModel);

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(ProductsListActions.enter());
  }

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}

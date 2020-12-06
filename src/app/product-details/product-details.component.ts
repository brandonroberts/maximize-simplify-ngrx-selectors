import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import * as ProductDetailsActions from './product-details.actions';
import { ProductsSelectors } from '../shared/state/products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product$ = this.store.select(ProductsSelectors.selectCurrentProduct);

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private store: Store
  ) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      map(params => ProductDetailsActions.enter({ productId: +params.get('productId') }))
    ).subscribe(this.store);
  }

  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
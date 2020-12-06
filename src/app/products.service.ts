import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators';

import { Product } from './shared/models';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  all() {
    return this.http.get<{ products: Product[] }>('/assets/products.json')
      .pipe(map(response => response.products));
  }
}
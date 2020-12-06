import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators';

import { Category } from './shared/models';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  constructor(private http: HttpClient) {}

  all() {
    return this.http.get<{ categories: Category[] }>('/assets/categories.json')
      .pipe(map(response => response.categories));
  }
}
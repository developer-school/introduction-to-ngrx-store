import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShoppingItem } from './store/models/shopping-item.model';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  constructor(private http: HttpClient) { }

  getShoppingItems() {
    return this.http.get<Array<ShoppingItem>>(`http://localhost:3000/shopping`)
      .pipe(
      delay(2000)
    )
  }
}

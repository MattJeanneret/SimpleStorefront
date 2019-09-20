import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http: HttpClient) { }

  /**
   * @name getProducts
   * @description gets a list of products
   * @return {Observable<IProduct[]>} a subscribable list of products
   */
  public getProducts(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>("http://localhost:4200/assets/products.json");
  }
}

import { Injectable } from '@angular/core';
import { ProductService } from '../store-front/services/product.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { IProduct } from '../store-front/interfaces/IProduct';

// Guard to get a list of products upon loading store
@Injectable({
  providedIn: 'root'
})
export class ProductResolverService {

  constructor(private _productService: ProductService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IProduct[]> {
    return this._productService.getProducts();
  }
}

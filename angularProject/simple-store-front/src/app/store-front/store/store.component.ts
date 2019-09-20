import { Component, OnInit, OnDestroy } from '@angular/core';
import { IProduct } from '../interfaces/IProduct';
import { Subscription, Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit, OnDestroy {

  // The the total cost of all items in the cart
  public totalCost: number = 0;

  //List of
  public products: IProduct[];
  // mapp of products. Name of product maps to an array of that product. 
  private _cart: Map<String, IProduct[]>;

  // Subscription to the activated route
  private _subscription: Subscription;


  private _resetSubject: Subject<void> = new Subject<void>();
  //inject activated route into the component
  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    this._cart = new Map<String, IProduct[]>();
    this._subscription = this._route.data.subscribe((response) => {
      this.products = response.products;
    })
  }

  ngOnDestroy() {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }

  /**
   * @name checkout
   * @description takes the user to the checkout screen
   * TODO implement this method
   */
  public checkout(): void {
    // send user to checkout page
  }

  /**
   * @name reset
   * @description resets the cart to be empty
   * @returns {void}
   */
  public reset(): void {
    this._cart = new Map<String, IProduct[]>();
    this._resetSubject.next();
    this.totalCost = 0;
  }

  public onAdded(product: IProduct): void {
    if (!this._cart.get(product.name)) {
      this._cart.set(product.name, [product])
    } else {
      let products: IProduct[] = this._cart.get(product.name);
      products.push(product);
      this._cart.set(product.name, products);
    }
    this.totalCost += product.price;
  }

}

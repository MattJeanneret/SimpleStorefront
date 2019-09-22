import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { IRecipe } from '../interfaces/IRecipe';
import { IngredientDataStoreService } from '../services/ingredient-data-store.service';
import { IRecipeIngredient } from '../interfaces/IRecipeIngredient';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit, OnDestroy {

  // The the total cost of all items in the cart
  public totalCost: number = 0;

  //List of products
  public products: IRecipe[];

  public recipeIngredients: Map<number, IRecipeIngredient> = new Map<number, IRecipeIngredient>();

  public resetSubject: Subject<void> = new Subject<void>();
 
  // mapp of products. Name of product maps to an array of that product. TODO wrap the cart in a service
  private _cart: Map<String, IRecipe[]>;

  // Subscription to the activated route
  private _subscription: Subscription;

  //inject activated route into the component
  constructor(private _route: ActivatedRoute, private _ingredientDataStore: IngredientDataStoreService) { }

  /**
   * initialize the cart. Get route params and then create the shared data store of ingredients
   */
  ngOnInit() {
    this._cart = new Map<String, IRecipe[]>();
    this._subscription = this._route.data.subscribe((response) => {
      this.products = response.products;
      for (let recipeIngredient of response.recipeIngredients) {
        this.recipeIngredients.set(recipeIngredient.id, recipeIngredient);
      }
      this._ingredientDataStore.createDataStore(response.ingredients);
    })
  }

  /**
   * Unsubscribe from all subcriptions
   */
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
   * @description resets the cart to be empty, resets the store, resets the total cost and tells child components that the cart has been reset
   * @returns {void}
   */
  public reset(): void {
    this._cart = new Map<String, IRecipe[]>();
    this._ingredientDataStore.resetStore();
    this.totalCost = 0;
    this.resetSubject.next();
  }

  /**
   * Triggered by an event emitter in the child component. Adds the item to the cart and updates the running total
   */
  public onAdded(product: IRecipe): void {
    if (!this._cart.get(product.name)) {
      this._cart.set(product.name, [product])
    } else {
      let products: IRecipe[] = this._cart.get(product.name);
      products.push(product);
      this._cart.set(product.name, products);
    }
    this.totalCost += product.price;
  }

}

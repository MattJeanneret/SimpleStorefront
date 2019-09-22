import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { OutOfStockComponent } from '../out-of-stock/out-of-stock.component';
import { IRecipe } from '../interfaces/IRecipe';
import { IngredientDataStoreService } from '../services/ingredient-data-store.service';
import { IRecipeIngredient } from '../interfaces/IRecipeIngredient';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {

  @Input() product: IRecipe;

  //TODO either make this its own request, extract from the route, or get them each one by one. Unsure of the best approach
  @Input() recipeIngredients: Map<number, IRecipeIngredient>;

  @Input() resetTrigger: Observable<void>;

  @Output() added = new EventEmitter<IRecipe>()

  public quantity: number = 0;

  private _subscription: Subscription;

  constructor(public dialog: MatDialog, private _dataStore: IngredientDataStoreService) {
    
  }

  /**
   * Subscribe to the reset trigger from the parent. Reset quantity to zero when reseting the cart
   */
  ngOnInit() {
    this._subscription = this.resetTrigger.subscribe(() => {
      this.quantity = 0;
    })
  }

  ngOnDestroy() {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }

  /**
   * @name add
   * @description increasees the quantity and alerts the parent the cart has been updated.
   */
  public add(): void {
    let canBuy: boolean = true;
    for (let ingredientNumber = 0; ingredientNumber < this.product.recipeIngredients.length; ingredientNumber++) {
      const ingredient: IRecipeIngredient = this.recipeIngredients.get(this.product.recipeIngredients[ingredientNumber]);
      const stock = this._dataStore.getIngredient(ingredient.name);
      if (!stock || stock < 0 || (stock - ingredient.quantity) < 0) {
        this.dialog.open(OutOfStockComponent, {
          width: '250px'
        });
        canBuy = false;
        break;
      }
    }
    if (canBuy) {
      for (let ingredientNumber = 0; ingredientNumber < this.product.recipeIngredients.length; ingredientNumber++) {
        const ingredient: IRecipeIngredient = this.recipeIngredients.get(this.product.recipeIngredients[ingredientNumber]);
        this._dataStore.useIngredient(ingredient.name, ingredient.quantity);        
      }
      this.quantity += 1;
      this.added.emit(this.product);
    }


  }

}

import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { IIngredient } from 'src/app/ingredients/interfaces/IIngredient';
import {cloneDeep} from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class IngredientDataStoreService {

  private _initialDataStore: Map<String, number>;
  private _dataStore: BehaviorSubject<Map<String, number>> = new BehaviorSubject<Map<String, number>>(new Map<String, number>());

  readonly $dataStore: Observable<Map<String, number>> = this._dataStore.asObservable();

  /**
   * @name createDataStore
   * @description initializes the data store
   * @param ingredients the ingredients to store
   * @returns an observable of the new list
   */
  public createDataStore(ingredients: IIngredient[]): Observable<Map<String, number>> {
    let ingredientMap: Map<String, number> = new Map<String, number>();
    for (let ingredient of ingredients) {
      ingredientMap.set(ingredient.name, ingredient.stock);
    }
    this._dataStore.next(ingredientMap);
    this._initialDataStore = cloneDeep(ingredientMap);
    return this.$dataStore;
  }

  /**
   * @name useIngredient
   * @description Uses an ingredient. Validation handled at the component level
   * @param name the name of the ingredient
   * @param amount the amount to use
   */
  public useIngredient(name: String, amount: number): Observable<Map<String, number>> {
    let ingredientMap = this._dataStore.getValue();
    const stock: number = ingredientMap.get(name);
    const remainder = stock - amount;
    ingredientMap.set(name, remainder);
    this._dataStore.next(ingredientMap);
    return this.$dataStore;
  }

  /**
   * @name getIngredient
   * @description gets the amount for a given ingredient
   * @param name the name of the ingredient
   */
  public getIngredient(name: String): number {
    return this._dataStore.getValue().get(name);
  }

  /**
   * Resets the store to it initial state
   */
  public resetStore(): Observable<Map<String, number>> {
    this._dataStore.next(cloneDeep(this._initialDataStore));
    return this.$dataStore;
  }
}

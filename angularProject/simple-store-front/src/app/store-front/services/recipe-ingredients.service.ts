import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRecipeIngredient } from '../interfaces/IRecipeIngredient';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeIngredientsService {

  constructor(private _http: HttpClient) { }

  /**
   * Gets a list of all ingredients for the recipes consisting of their id and quantity
   */
  public getRecipeIngredients(): Observable<IRecipeIngredient[]> {
    return this._http.get<IRecipeIngredient[]>(`http://localhost:4200/assets/recipe_ingredients.json`);
  }
}

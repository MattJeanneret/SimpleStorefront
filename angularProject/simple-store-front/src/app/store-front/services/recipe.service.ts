import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRecipe } from '../interfaces/IRecipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private _http: HttpClient) { }

  /**
   * @name getRecipes
   * @description gets a list of recipes
   * @return {Observable<IRecipe[]>} a subscribable list of recipes
   */
  public getRecipes(): Observable<IRecipe[]> {
    return this._http.get<IRecipe[]>("http://localhost:4200/assets/recipes.json");
  }
}

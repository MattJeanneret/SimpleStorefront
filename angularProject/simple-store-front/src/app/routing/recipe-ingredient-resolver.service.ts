import { Injectable } from '@angular/core';
import { RecipeIngredientsService } from '../store-front/services/recipe-ingredients.service';
import { Observable } from 'rxjs';
import { IRecipeIngredient } from '../store-front/interfaces/IRecipeIngredient';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

/**
 * Gets all recipes ingredients on page load for routes with this resolver
 */
@Injectable({
  providedIn: 'root'
})
export class RecipeIngredientResolverService {

  constructor(private _recipeIngredientsService: RecipeIngredientsService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IRecipeIngredient[]> {
    return this._recipeIngredientsService.getRecipeIngredients();
  }
}

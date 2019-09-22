import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { RecipeService } from '../store-front/services/recipe.service';
import { IRecipe } from '../store-front/interfaces/IRecipe';

// Guard to get a list of products upon loading store
@Injectable({
  providedIn: 'root'
})
export class RecipeResolverService {

  constructor(private _recipeService: RecipeService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IRecipe[]> {
    return this._recipeService.getRecipes();
  }
}

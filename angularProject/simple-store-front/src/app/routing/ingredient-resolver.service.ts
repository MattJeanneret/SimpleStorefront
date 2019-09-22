import { Injectable } from '@angular/core';
import { IIngredient } from '../ingredients/interfaces/IIngredient';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { IngredientService } from '../ingredients/services/ingredient/ingredient.service';
import { Observable } from 'rxjs';

/**
 * Guard to load ingredients when loading ingredient service
 */
@Injectable({
  providedIn: 'root'
})
export class IngredientResolverService implements Resolve<IIngredient[]>{

  constructor(private _ingredientService: IngredientService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IIngredient[]> {
    return this._ingredientService.getIngredients();
  }
}

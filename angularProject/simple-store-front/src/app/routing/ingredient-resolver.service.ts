import { Injectable } from '@angular/core';
import { IIngredient } from '../interface/IIngredient';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { IngredientService } from '../services/ingredient/ingredient.service';
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

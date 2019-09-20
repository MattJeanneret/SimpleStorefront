import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IIngredient } from 'src/app/interface/IIngredient';
@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  constructor(private _http: HttpClient) { }

  /**
   * Gets ingredients from the server
   */
  public getIngredients(): Observable<IIngredient[]> {
    return this._http.get<IIngredient[]>(`http://localhost:4200/assets/ingredients.json`);
  }
}

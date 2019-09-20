import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { IIngredient } from 'src/app/interface/IIngredient';
import { of } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class IngredientMockService {
    
    /**
     * Mock ingredients service call
     */
    public getIngredients(): Observable<IIngredient[]> {
      return of([]);
    }
  }
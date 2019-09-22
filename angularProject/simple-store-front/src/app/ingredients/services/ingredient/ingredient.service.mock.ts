import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { IIngredient } from '../../interfaces/IIngredient';

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
import { TestBed, async } from '@angular/core/testing';

import { IngredientDataStoreService } from './ingredient-data-store.service';
import { IIngredient } from 'src/app/ingredients/interfaces/IIngredient';
import { Subscription } from 'rxjs';

describe('IngredientDataStoreService', () => {
  let service: IngredientDataStoreService;
  let subscription: Subscription;
  const ingredients: IIngredient[] = [
    {
      "id": 1,
      "image": "assets/grapefruit.png",
      "name": "grapefruit",
      "measure": "whole",
      "price": 2,
      "stock": 100
  },
  {
      "id": 2,
      "image": "assets/lemon.png",
      "name": "lemon",
      "measure": "whole",
      "price": 0.5,
      "stock": 30
  }
]
  beforeEach(() => TestBed.configureTestingModule({
    
  }));
  beforeEach(() => {
    service = TestBed.get(IngredientDataStoreService);
    service.createDataStore(ingredients);
  })

  afterEach(() => {
    if (subscription) {
      subscription.unsubscribe();
    }
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create the data store with the correct values', async(() => {
    subscription = service.$dataStore.subscribe((dataMap: Map<String, number>) => {
      for (let ingredient of ingredients) {
        expect(dataMap.get(ingredient.name)).toEqual(ingredient.stock);
      }
    })
  }));

  it('should get the stock on an ingredient', () => {
    const actual = service.getIngredient("lemon");
    expect(actual).toEqual(30);
  })

  it('should reduce the stock of an ingredient', async(() => {
    subscription = service.useIngredient("lemon", 3).subscribe((dataMap: Map<String, number>) => {
        const actual = dataMap.get("lemon");
        expect(actual).toEqual(27);
    });
  }))
});

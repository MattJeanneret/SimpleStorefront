import { TestBed } from '@angular/core/testing';

import { IngredientDataStoreService } from './ingredient-data-store.service';

describe('IngredientDataStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IngredientDataStoreService = TestBed.get(IngredientDataStoreService);
    expect(service).toBeTruthy();
  });
});

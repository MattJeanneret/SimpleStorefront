import { TestBed } from '@angular/core/testing';

import { IngredientResolverService } from './ingredient-resolver.service';

describe('IngredientResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IngredientResolverService = TestBed.get(IngredientResolverService);
    expect(service).toBeTruthy();
  });
});

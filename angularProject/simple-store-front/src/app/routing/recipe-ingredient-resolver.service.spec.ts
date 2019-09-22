import { TestBed } from '@angular/core/testing';

import { RecipeIngredientResolverService } from './recipe-ingredient-resolver.service';

describe('RecipeIngredientResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecipeIngredientResolverService = TestBed.get(RecipeIngredientResolverService);
    expect(service).toBeTruthy();
  });
});

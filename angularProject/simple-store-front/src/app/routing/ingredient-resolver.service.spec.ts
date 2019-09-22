import { TestBed } from '@angular/core/testing';

import { IngredientResolverService } from './ingredient-resolver.service';
import { IngredientMockService } from '../ingredients/services/ingredient/ingredient.service.mock';
import { IngredientService } from '../ingredients/services/ingredient/ingredient.service';

describe('IngredientResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [{provide: IngredientService, useCLass: IngredientMockService}]
  }));

  it('should be created', () => {
    const service: IngredientResolverService = TestBed.get(IngredientResolverService);
    expect(service).toBeTruthy();
  });
});

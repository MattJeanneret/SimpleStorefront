import { TestBed } from '@angular/core/testing';

import { RecipeIngredientsService } from './recipe-ingredients.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RecipeIngredientsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: RecipeIngredientsService = TestBed.get(RecipeIngredientsService);
    expect(service).toBeTruthy();
  });
});

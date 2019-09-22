import { TestBed } from '@angular/core/testing';

import { RecipeIngredientsService } from './recipe-ingredients.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { IRecipeIngredient } from '../interfaces/IRecipeIngredient';

describe('RecipeIngredientsService', () => {

  let httpTestingController: HttpTestingController;
  let service: RecipeIngredientsService;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  beforeEach(() => {
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(RecipeIngredientsService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make a get request to the correct url', () => {
    const testData: IRecipeIngredient[] = [
      {
        "id": 1,
        "quantity": 1,
        "name": "lemon"
    }
    ];
    const url = "http://localhost:4200/assets/recipe_ingredients.json"

    service.getRecipeIngredients().subscribe((data) => {
      expect(data).toEqual(testData);
    });

    const req = httpTestingController.expectOne(url);
    expect(req.request.method).toEqual('GET');
    req.flush(testData);
  })
});

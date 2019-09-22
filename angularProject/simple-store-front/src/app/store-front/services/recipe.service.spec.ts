import { TestBed } from '@angular/core/testing';

import { RecipeService } from './recipe.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { IRecipe } from '../interfaces/IRecipe';

describe('RecipeService', () => {
  let httpTestingController: HttpTestingController;
  let service: RecipeService;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  beforeEach(() => {
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(RecipeService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make a get request to the correct url', () => {
    const testData: IRecipe[] = [
      {
        "id": 1,
        "name": "Lemonade",
        "image": "assets/yellow_lemonade.png",
        "price": 1,
        "recipeIngredients": [1, 2, 3]
    }
    ];
    const url = "http://localhost:4200/assets/recipes.json"

    service.getRecipes().subscribe((data) => {
      expect(data).toEqual(testData);
    });

    const req = httpTestingController.expectOne(url);
    expect(req.request.method).toEqual('GET');
    req.flush(testData);
  })
});

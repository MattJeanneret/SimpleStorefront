import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { IngredientService } from './ingredient.service';
import { IIngredient } from 'src/app/interface/IIngredient';
import { HttpClient } from '@angular/common/http';

describe('IngredientService', () => {

  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: IngredientService;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  beforeEach(() => {
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(IngredientService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make a get request to the correct url', () => {
    const testData: IIngredient[] = [
      {
        id: "3",
        image: "sugar-cube.png",
        name: "sugar",
        measure: "oz",
        price: 0.01,
        stock: 1000
    }
    ];
    const url = "http://localhost:4200/assets/ingredients.json"

    service.getIngredients().subscribe((data) => {
      expect(data).toEqual(testData);
    });

    const req = httpTestingController.expectOne(url);
    expect(req.request.method).toEqual('GET');
    req.flush(testData);
  })
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreComponent } from './store.component';
import { MatCardModule } from '@angular/material/card';
import { ProductStubComponent } from '../product/product.component.stub';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';

describe('StoreComponent', () => {
  let component: StoreComponent;
  let fixture: ComponentFixture<StoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatCardModule],
      declarations: [ StoreComponent, ProductStubComponent ],
      providers: [ {provide: ActivatedRoute, useValue: {
        data: of({
          products: [],
          recipeIngredients: [],
          ingredients: []
        })
      }}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    if (fixture) {
      fixture.destroy()
    }
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add an item to the cart', () => {
    component.onAdded(    {
        "id": 1,
        "name": "Lemonade",
        "image": "assets/yellow_lemonade.png",
        "price": 1,
        "recipeIngredients": [1, 2, 3]
    });

    expect(component.totalCost).toEqual(1);
  });

  it('should reset the total cost to zero', () => {
    component.onAdded(    {
        "id": 1,
        "name": "Lemonade",
        "image": "assets/yellow_lemonade.png",
        "price": 1,
        "recipeIngredients": [1, 2, 3]
    });

    component.reset();

    expect(component.totalCost).toEqual(0);

  })
});

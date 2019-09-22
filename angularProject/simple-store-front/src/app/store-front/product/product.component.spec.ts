import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';
import { MatCardModule, MatDialogRef, MatDialogModule } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { IRecipe } from '../interfaces/IRecipe';
import { IRecipeIngredient } from '../interfaces/IRecipeIngredient';

describe('ProductComponent', () => {
  let parentComponent: ProductHostComponent;
  let parentFixture: ComponentFixture<ProductHostComponent>
  let productElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatCardModule, MatDialogModule],
      declarations: [ ProductComponent, ProductHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    parentFixture = TestBed.createComponent(ProductHostComponent);
    parentComponent = parentFixture.componentInstance;
    productElement = parentFixture.nativeElement.querySelector('app-product')
    parentFixture.detectChanges();
  });

  it('should create', () => {
    expect(productElement).toBeTruthy();
  });
});

@Component({
  template: `
    <app-product [product]="product" [recipeIngredients]="recipeIngredients" (added)="onAdded($event)"></app-product>
  `
})
class ProductHostComponent implements OnInit {
  product: IRecipe = {
    "id": 1,
    "name": "Lemonade",
    "image": "assets/yellow_lemonade.png",
    "price": 1,
    "recipeIngredients": [1, 2, 3]
  }
  recipeIngredients: Map<number, IRecipeIngredient>;
  
  ngOnInit() {
    this.recipeIngredients = new Map<number, IRecipeIngredient>();
    this.recipeIngredients.set(1, {
        "id": 1,
        "quantity": 1,
        "name": "lemon"
    })
    this.recipeIngredients.set(2, {
        "id": 2,
        "quantity": 1,
        "name": "sugar"
    } )
    this.recipeIngredients.set(3, {
        "id": 3,
        "quantity": 1,
        "name": "water"
    })
  }

  public onAdded(recipe: IRecipe): void {}

}
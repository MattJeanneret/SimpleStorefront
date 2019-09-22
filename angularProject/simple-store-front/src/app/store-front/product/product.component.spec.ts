import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';
import { MatCardModule, MatDialogRef, MatDialogModule, MatDialog, DialogPosition } from '@angular/material';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IRecipe } from '../interfaces/IRecipe';
import { IRecipeIngredient } from '../interfaces/IRecipeIngredient';
import { formatCurrency } from '@angular/common';
import { IngredientDataStoreService } from '../services/ingredient-data-store.service';

describe('ProductComponent', () => {
  let parentComponent: ProductHostComponent;
  let parentFixture: ComponentFixture<ProductHostComponent>;
  let component: ProductComponent;
  let matDialog: MatDialog;
  let dataStore: IngredientDataStoreService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatCardModule, MatDialogModule],
      declarations: [ ProductComponent, ProductHostComponent ],
      providers: [MatDialog, IngredientDataStoreService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    parentFixture = TestBed.createComponent(ProductHostComponent);
    parentComponent = parentFixture.componentInstance;
    parentFixture.detectChanges();
    component = parentComponent.productComponent;
  });

  afterEach(() => {
    if (parentFixture) {
      parentFixture.destroy();
    }
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct name', () => {
    let nameElement: HTMLElement = <HTMLElement>parentFixture.debugElement.nativeElement.querySelector(".mat-card-title");
    expect(nameElement.innerHTML.trim()).toEqual(component.product.name);
  });

  it('should display the correct image', () => {
    let imageElement = parentFixture.debugElement.nativeElement.querySelector("img");
    expect(imageElement.src).toEqual('http://localhost:9876/' + component.product.image);
  });

  it('should display the correct price', () => {
    let priceElement = parentFixture.debugElement.nativeElement.querySelector("#price");
    const formattedCurrency = formatCurrency(component.product.price, "en-US", "$");
    expect(priceElement.innerHTML.trim()).toEqual(formattedCurrency);
  });

  it('should display the correct amount', () => {
    let amountElement = parentFixture.debugElement.nativeElement.querySelector("#amount");
    const expectedAmount = `amount: ${component.quantity}`;
    expect(amountElement.innerHTML).toEqual(expectedAmount);
  });

  describe('add', () => {
    let dialogSpy;
    beforeEach(() => {
      dataStore = TestBed.get(IngredientDataStoreService);
      matDialog = TestBed.get(MatDialog);
      dialogSpy = spyOn(matDialog, 'open').and.stub();
    })
    it('should call add', async(() => {
      const addSpy = spyOn(component, 'add').and.stub();
      const button = parentFixture.debugElement.nativeElement.querySelector("button");
      button.click();
      parentFixture.whenStable().then(() => {
        expect(addSpy).toHaveBeenCalled();
      });
    }));

    it('should open the dialog when the ingredient does not exist', () => {
      dataStore.createDataStore([]);
      component.add();
      expect(dialogSpy).toHaveBeenCalled();
    });
    it('should open the dialog when an ingredient is out of stock', () => {
      dataStore.createDataStore([    {
            "id": 1,
            "image": "assets/grapefruit.png",
            "name": "grapefruit",
            "measure": "whole",
            "price": 2,
            "stock": 100
        },
        {
            "id": 2,
            "image": "assets/lemon.png",
            "name": "lemon",
            "measure": "whole",
            "price": 0.5,
            "stock": 0
        },
        {
            "id": 3,
            "image": "assets/sugar-cube.png",
            "name": "sugar",
            "measure": "oz",
            "price": 0.01,
            "stock": 1000
        },
        {
            "id": 4,
            "image": "assets/water.png",
            "name": "water",
            "measure": "liters",
            "price": 0,
            "stock": 10000000000000
        }]);
        component.add();
        expect(dialogSpy).toHaveBeenCalled();
      });

      it('should emit an event when all the ingredients are in stock', () => {
        const emitterSpy = spyOn(parentComponent, "onAdded");
        dataStore.createDataStore([    {
          "id": 1,
          "image": "assets/grapefruit.png",
          "name": "grapefruit",
          "measure": "whole",
          "price": 2,
          "stock": 100
      },
      {
          "id": 2,
          "image": "assets/lemon.png",
          "name": "lemon",
          "measure": "whole",
          "price": 0.5,
          "stock": 30
      },
      {
          "id": 3,
          "image": "assets/sugar-cube.png",
          "name": "sugar",
          "measure": "oz",
          "price": 0.01,
          "stock": 1000
      },
      {
          "id": 4,
          "image": "assets/water.png",
          "name": "water",
          "measure": "liters",
          "price": 0,
          "stock": 10000000000000
      }]);
      component.add();
      expect(dialogSpy).not.toHaveBeenCalled();
      expect(emitterSpy).toHaveBeenCalled();
      expect(emitterSpy).toHaveBeenCalledWith(component.product);
    })

  })
});

@Component({
  template: `
    <app-product [product]="product" [recipeIngredients]="recipeIngredients" (added)="onAdded($event)"></app-product>
  `
})
class ProductHostComponent implements OnInit {
  @ViewChild(ProductComponent, {static: false}) productComponent;
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
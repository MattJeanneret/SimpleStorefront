import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientListComponent } from './ingredient-list.component';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('IngredientListComponent', () => {
  let component: IngredientListComponent;
  let fixture: ComponentFixture<IngredientListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientListComponent,     
 ],
        imports: [
          MatButtonModule,
          MatCardModule,
          MatExpansionModule,
          MatListModule,
          BrowserAnimationsModule
        ],
        providers: [ {provide: ActivatedRoute, useValue: {
          data: of({
            ingredients: [
              {
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
            }
            ]
          })
        }}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    if (fixture) {
      fixture.destroy();
    }
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct number of ingredients', () => {
    const elements = fixture.debugElement.nativeElement.querySelectorAll('.ingredient-container');
    expect(elements.length).toBe(4);
  });
});

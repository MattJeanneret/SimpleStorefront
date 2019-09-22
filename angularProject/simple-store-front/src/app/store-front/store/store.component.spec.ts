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
});

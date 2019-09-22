import { Component, Input, Output, EventEmitter } from '@angular/core';

import { IRecipe } from '../interfaces/IRecipe';

import { IRecipeIngredient } from '../interfaces/IRecipeIngredient';

/**
 * stub component for product
 */
@Component({
    selector: 'app-product',
    template: ``,
    styleUrls: ['./product.component.scss']
  })
  export class ProductStubComponent {
  
    @Input() product: IRecipe;
  
    //TODO either make this its own request, extract from the route, or get them each one by one. Unsure of the best approach
    @Input() recipeIngredients: Map<number, IRecipeIngredient>;
  
    @Output() added = new EventEmitter<IRecipe>();
  }
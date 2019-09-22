import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientListComponent } from './ingredient-list/ingredient-list.component';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';


/**
 * Module for maintainig ingredient related components
 */
@NgModule({
  declarations: [
    IngredientListComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatExpansionModule,
    MatCardModule
    
  ],
  exports: [
    IngredientListComponent
  ]
})
export class IngredientsModule { }

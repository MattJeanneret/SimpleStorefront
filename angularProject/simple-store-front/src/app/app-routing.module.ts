import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngredientComponent } from './ingredient/ingredient.component';
import { IngredientResolverService } from './routing/ingredient-resolver.service';
import { IngredientListComponent } from './ingredient-list/ingredient-list.component';


const routes: Routes = [
  {
    path: 'ingredients',
    component: IngredientListComponent,
    resolve: {
      ingredients: IngredientResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

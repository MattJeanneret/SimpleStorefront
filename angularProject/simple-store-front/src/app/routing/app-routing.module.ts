import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngredientResolverService } from './ingredient-resolver.service';
import { IngredientListComponent } from '../ingredients/ingredient-list/ingredient-list.component';
import { StoreComponent } from '../store-front/store/store.component';
import { RecipeResolverService } from './recipe-resolver.service';
import { RecipeIngredientResolverService } from './recipe-ingredient-resolver.service';


const routes: Routes = [
  {
    path: 'store',
    component: StoreComponent,
    resolve: {
      products: RecipeResolverService,
      ingredients: IngredientResolverService,
      recipeIngredients: RecipeIngredientResolverService
    }
  },
  {
    path: '',
    redirectTo: '/store',
    pathMatch: 'full'
  },
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

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngredientResolverService } from './ingredient-resolver.service';
import { IngredientListComponent } from '../ingredient-list/ingredient-list.component';
import { StoreComponent } from '../store-front/store/store.component';
import { ProductResolverService } from './product-resolver.service';


const routes: Routes = [
  {
    path: 'store',
    component: StoreComponent,
    resolve: {
      products: ProductResolverService
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

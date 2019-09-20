import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store/store.component';
import {MatCardModule } from '@angular/material/card';
import { ProductComponent } from './product/product.component';



@NgModule({
  declarations: [StoreComponent, ProductComponent],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class StoreFrontModule { }

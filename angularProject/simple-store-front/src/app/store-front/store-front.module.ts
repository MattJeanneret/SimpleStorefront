import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store/store.component';
import {MatCardModule } from '@angular/material/card';
import { ProductComponent } from './product/product.component';
import {MatButtonModule} from '@angular/material/button';
import { OutOfStockComponent } from './out-of-stock/out-of-stock.component'; 
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [StoreComponent, ProductComponent, OutOfStockComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule
  ],
  entryComponents: [OutOfStockComponent]
})
export class StoreFrontModule { }

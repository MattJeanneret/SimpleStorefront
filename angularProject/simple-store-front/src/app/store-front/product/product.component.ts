import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../interfaces/IProduct';
import { Observable, Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { OutOfStockComponent } from '../out-of-stock/out-of-stock.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: IProduct;

  @Input() resetEvent: Observable<void>;

  @Output() added = new EventEmitter<IProduct>()

  public quantity: number = 0;
  private _intialStock: number;

  private _resetSubscription: Subscription;

  constructor(public dialog: MatDialog) {
    
  }
  ngOnInit() {
    this._intialStock = this.product.stock;
    this._resetSubscription = this.resetEvent.subscribe(() => {
      this.quantity = 0;
      this.product.stock = this._intialStock;
    })
  }

  ngOnDestroy() {
    if (this._resetSubscription) {
      this._resetSubscription.unsubscribe();
    }
  }

  /**
   * @name add
   * @description increasees the quantity and alerts the parent the cart has been updated.
   */
  public add(): void {
    // Simplified version of checking for ingredients stock. TODO map ingredients to components and use ingredients for out of stock conditions
    if (this.product.stock <= 0) {
      this.dialog.open(OutOfStockComponent, {
        width: '250px'
      });
    } else {
      this.quantity++;
      this.product.stock--;
      this.added.emit(this.product);
    }

  }

}

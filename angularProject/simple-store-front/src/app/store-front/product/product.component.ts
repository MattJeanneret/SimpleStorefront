import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../interfaces/IProduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input() product: IProduct;

  @Output() added = new EventEmitter<IProduct>()

  public quantity: number = 0;

  /**
   * @name add
   * @description increasees the quantity and alerts the parent the cart has been updated.
   */
  public add(): void {
    this.quantity++;
    this.added.emit(this.product);
  }

}

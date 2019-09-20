import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../interfaces/IProduct';
import { Observable, Subscription } from 'rxjs';

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

  private _resetSubscription: Subscription;

  ngOnInit() {
    this._resetSubscription = this.resetEvent.subscribe(() => {
      this.quantity = 0;
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
    this.quantity++;
    this.added.emit(this.product);
  }

}

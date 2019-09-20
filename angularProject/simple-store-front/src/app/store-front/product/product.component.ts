import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from '../interfaces/IProduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: IProduct;

  public quantity: number = 0;

  constructor() { }

  ngOnInit() {
  }

  public add(): void {
    this.quantity++;
  }

}

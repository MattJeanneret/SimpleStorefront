import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

/**
 * Component to inform the user their selected item is out of stock
 */
@Component({
  selector: 'app-out-of-stock',
  templateUrl: './out-of-stock.component.html',
  styleUrls: ['./out-of-stock.component.scss']
})
export class OutOfStockComponent {

  constructor(public dialogRef: MatDialogRef<OutOfStockComponent>) { }
}

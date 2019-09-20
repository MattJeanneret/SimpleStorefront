import { Component, OnInit, Input } from '@angular/core';
import { IIngredient } from '../interface/IIngredient';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss']
})
export class IngredientComponent  {

  @Input() ingredient: IIngredient;

  constructor() { }

}

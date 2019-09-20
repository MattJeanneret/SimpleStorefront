import { Component, OnInit } from '@angular/core';
import { IngredientService } from '../services/ingredient/ingredient.service';
import { Subscription } from 'rxjs';
import { IIngredient } from '../interface/IIngredient';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss']
})
export class IngredientComponent implements OnInit {

  private _subscription: Subscription;

  public ingredients: IIngredient[];

  constructor(private _ingredientService: IngredientService) { }

  /**
   * Load all the ingredients
   */
  ngOnInit() {
    //TODO move this to a resolver so it is loaded before the page is loaded
    this._subscription = this._ingredientService.getIngredients().subscribe((ingredients: IIngredient[]) => {
      this.ingredients = ingredients;
    })
  }

}

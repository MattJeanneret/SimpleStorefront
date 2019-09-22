import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { IIngredient } from '../interfaces/IIngredient';
import {ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.scss']
})
export class IngredientListComponent implements OnInit, OnDestroy {

  public ingredients: IIngredient[] = [];

  private _subscription: Subscription;
  
  /**
   * inject activated route
   */
  constructor(private _route: ActivatedRoute) { }

  /**
   * Subscribe to the active route and retrieve ingredients from the route
   */
  ngOnInit() {
    this._subscription = this._route.data.subscribe((response) => {
      this.ingredients = response.ingredients;
    })
  }

  /**
   * Remove any subscriptions (if any)
   */
  ngOnDestroy() {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }

}

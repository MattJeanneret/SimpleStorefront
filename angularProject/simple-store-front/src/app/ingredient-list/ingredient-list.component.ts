import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { IIngredient } from '../interface/IIngredient';
import {ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.scss']
})
export class IngredientListComponent implements OnInit, OnDestroy {

  private _subscription: Subscription;

  public ingredients: IIngredient[] = [];
  
  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
  this._subscription = this._route.data.subscribe((response) => {
      this.ingredients = response.ingredients;
    })
  }

  ngOnDestroy() {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }

}

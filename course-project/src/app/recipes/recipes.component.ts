import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from 'events';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipeDetails: Recipe;

  constructor() { }

  ngOnInit() {
  }

  setRecipeDetails(recipeDetails: Recipe) {

    this.recipeDetails = recipeDetails;
  }
}

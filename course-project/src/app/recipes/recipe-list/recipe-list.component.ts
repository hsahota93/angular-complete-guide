import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test recipe',
      'https://img.buzzfeed.com/video-api-prod/assets/5948dace4551484287a85a49b6e5c773/BFV15479_FluffyJapanesePancakes-ThumbC1080.jpg'),
    new Recipe('A Test Recipe', 'This is a test recipe',
      'https://img.buzzfeed.com/video-api-prod/assets/5948dace4551484287a85a49b6e5c773/BFV15479_FluffyJapanesePancakes-ThumbC1080.jpg')
  ];

  @Output() selectedRecipeDetails = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  getRecipes(): Recipe[] {
    return this.recipes;
  }

  onRecipeSelected(recipe: Recipe) {

    this.selectedRecipeDetails.emit(recipe);
  }
}

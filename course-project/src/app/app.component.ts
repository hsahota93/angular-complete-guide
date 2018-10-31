import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'course-project';
  renderRecipes = true;
  renderShoppingList = false;

  constructor() { }

  renderRecipesComponent(event: Event) {

    this.renderShoppingList = false;
    this.renderRecipes = true;
    console.log('Render Recipes: ' + this.renderRecipes);
  }

  renderShoppingListComponent(event: Event) {

    this.renderRecipes = false;
    this.renderShoppingList = true;
    console.log('Render shopping list: ' + this.renderShoppingList);
  }
}

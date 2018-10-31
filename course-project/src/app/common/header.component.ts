import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    @Output() recipesClicked: EventEmitter<any> = new EventEmitter();
    @Output() shoppingListClicked: EventEmitter<any> = new EventEmitter();

    clickedRecipesLink() {

        this.recipesClicked.emit();
    }

    clickedShoppingListLink() {

        this.shoppingListClicked.emit();
    }
}

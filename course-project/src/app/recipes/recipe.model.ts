import { PARAMETERS } from '@angular/core/src/util/decorators';

export class Recipe {

    public recipeName: string;
    public recipeDescription: string;
    public imagePath: string;

    constructor(recipeName: string, description: string, imagePath: string) {

        this.recipeName = recipeName;
        this.recipeDescription = description;
        this.imagePath = imagePath;
    }
}

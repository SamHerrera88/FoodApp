import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredients.model'
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Peanut Butter and Jelly Sandwich',
      'Bread and Butter',
      'https://upload.wikimedia.org/wikipedia/commons/a/a8/Peanut-Butter-Jelly-Sandwich.jpg',
      [
        new Ingredient('White bread', 2),
        new Ingredient('Peanut Butter', 1),
        new Ingredient('Strawberry jelly', 1),
      ]),
    new Recipe(
      'Almond Butter and Jelly Sandwich',
      'Bread and Butter',
      'https://upload.wikimedia.org/wikipedia/commons/a/a8/Peanut-Butter-Jelly-Sandwich.jpg',
      [
        new Ingredient('Wheat bread', 2),
        new Ingredient('Almond Butter', 1),
        new Ingredient('Grape Jelly', 1),
      ]),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}

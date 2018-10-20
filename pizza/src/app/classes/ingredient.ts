import {IngredientOrder} from "./ingredient-order";

export class Ingredient {
  constructor(public id?: number,
              public name?: string,
              public price?: number,
              public orders?: IngredientOrder[]) { }
}

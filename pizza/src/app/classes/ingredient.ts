import {IngredientRequest} from "./ingredient-request";

export class Ingredient {
  constructor(public id?: number,
              public name?: string,
              public price?: number,
              public orders?: IngredientRequest[]) { }
}

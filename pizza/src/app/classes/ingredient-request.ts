import {Ingredient} from "./ingredient";
import {Request} from "./request";

export class IngredientRequest {
  constructor(public id?: number,
              public ingredientId?: number | Ingredient,
              public requestId?: number | Request) { }
}

import {Order} from "./order";
import {Ingredient} from "./ingredient";

export class IngredientOrder {
  constructor(public id?: number,
              public ingredientId?: number | Ingredient,
              public orderId?: number | Order) { }
}

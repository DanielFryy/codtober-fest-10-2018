import {Client} from "./client";
import {PizzaOrder} from "./pizza-order";
import {IngredientOrder} from "./ingredient-order";

export class Order {
  constructor(public id?: number,
              public price?: number,
              public pizzas?: PizzaOrder[],
              public ingredients?: IngredientOrder[],
              public clientId?: number | Client) { }
}

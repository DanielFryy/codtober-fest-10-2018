import {Order} from "./order";
import {Pizza} from "./pizza";
import {IngredientRequest} from "./ingredient-request";

export class Request {
  constructor(public id?: number,
              public price?: number,
              public orderId?: number | Order,
              public pizzaId?: number | Pizza,
              public ingredients?: number | IngredientRequest[]) { }
}

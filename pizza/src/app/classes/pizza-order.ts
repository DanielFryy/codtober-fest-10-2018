import {Pizza} from "./pizza";
import {Order} from "./order";

export class PizzaOrder {
  constructor(public id?: number,
  public pizzaId?: number | Pizza,
  public orderId?: number | Order) { }
}

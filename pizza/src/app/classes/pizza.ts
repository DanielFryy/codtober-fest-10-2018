import {PizzaOrder} from "./pizza-order";

export class Pizza {
  constructor(public id?: number,
              public size?: string,
              public price?: number,
              public orders?: PizzaOrder[]) { }
}

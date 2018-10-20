import {Client} from "./client";
import {Request} from "./request";

export class Order {
  constructor(public id?: number,
              public price?: number,
              public pizzas?: Request[],
              public clientId?: number | Client) { }
}

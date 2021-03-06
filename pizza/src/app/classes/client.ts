import {Order} from "./order";

export class Client {
  constructor(public id?: number,
              public name?: string,
              public address?: string,
              public phone?: string,
              public orders?: Order[]) { }
}

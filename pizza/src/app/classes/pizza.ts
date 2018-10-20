import {Request} from "./request";

export class Pizza {
  constructor(public id?: number,
              public size?: string,
              public price?: number,
              public requests?: Request[]) { }
}

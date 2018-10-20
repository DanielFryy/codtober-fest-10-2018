import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Request} from "../classes/request";

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private _http: HttpClient) { }

  create(model: Request) {
    return this._http.post('http://localhost:1337/Request', model);
  }

}

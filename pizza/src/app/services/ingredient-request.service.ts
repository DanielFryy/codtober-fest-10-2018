import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IngredientRequest} from "../classes/ingredient-request";

@Injectable({
  providedIn: 'root'
})
export class IngredientRequestService {

  constructor(private _http: HttpClient) { }

  create(model: IngredientRequest) {
    return this._http.post('http://localhost:1337/IngredientRequest', model);
  }
}

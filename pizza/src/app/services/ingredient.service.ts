import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  constructor(private _http: HttpClient) { }

  getAll() {
    // return this._http.get(environment.backUrl + this.model);
    return this._http.get('http://localhost:1337/Ingredient');
  }

}

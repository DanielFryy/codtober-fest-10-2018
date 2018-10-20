import { Component, OnInit } from '@angular/core';
import {ClientService} from "../../services/client.service";
import {PizzaService} from "../../services/pizza.service";
import {Pizza} from "../../classes/pizza";
import {IngredientService} from "../../services/ingredient.service";
import {Ingredient} from "../../classes/ingredient";
import {IngredientRequestService} from "../../services/ingredient-request.service";

@Component({
  selector: 'app-place-your-order',
  templateUrl: './place-your-order.component.html',
  styleUrls: ['./place-your-order.component.css']
})
export class PlaceYourOrderComponent implements OnInit {

  pizzas: Pizza[];
  ingredients: Ingredient[];

  clientName: string;
  clientAddress: string;
  clientPhone: string;
  pizzaId: number;
  selectedIngredients: any[];

  constructor(private _clientService: ClientService,
              private _pizzaService: PizzaService,
              private _ingredientService: IngredientService,
              private _ingredientRequestService: IngredientRequestService) { }

  ngOnInit() {
    this._loadPizzas();
    this._loadIngredients();
  }

  private _loadPizzas() {
    this._pizzaService
      .getAll()
      .subscribe((pizzas: Pizza[]) => {
        this.pizzas = pizzas;
        console.log('pizzas', this.pizzas);
      }, error => {
        console.log('errorPizzas', error);
      });
  }

  private _loadIngredients() {
    this._ingredientService
      .getAll()
      .subscribe((ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
        console.log('ingredients', this.ingredients);
      }, error => {
        console.log('errorIngredients', error);
      });
  }

  order() {
    console.log('Hahaha!!!', this.clientName, this.clientAddress, this.clientPhone, this.pizzaId);
    console.log('Hahaha!!!', this.selectedIngredients);
  }

}

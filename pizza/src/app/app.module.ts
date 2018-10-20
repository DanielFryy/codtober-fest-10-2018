import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaceYourOrderComponent } from './components/place-your-order/place-your-order.component';
import { MyRoutesModule } from './routes';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { HomeComponent } from './components/home/home.component';
import { PizzaService } from './services/pizza.service';
import { ClientService } from './services/client.service';
import { HttpClientModule } from '@angular/common/http';
import {IngredientService} from "./services/ingredient.service";
import {FormsModule} from "@angular/forms";
import {RequestService} from "./services/request.service";
import {OrderService} from "./services/order.service";
import {IngredientRequestService} from "./services/ingredient-request.service";

@NgModule({
  declarations: [
    AppComponent,
    PlaceYourOrderComponent,
    OrderDetailComponent,
    OrderListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyRoutesModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    PizzaService,
    ClientService,
    IngredientService,
    RequestService,
    OrderService,
    IngredientRequestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

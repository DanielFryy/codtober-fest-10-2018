import {AppComponent} from "./app.component";
import {RouterModule, Routes} from "@angular/router";
import {PlaceYourOrderComponent} from "./components/place-your-order/place-your-order.component";
import {ModuleWithProviders} from "@angular/core";
import {HomeComponent} from "./components/home/home.component";
import {OrderDetailComponent} from "./components/order-detail/order-detail.component";
import {OrderListComponent} from "./components/order-list/order-list.component";

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'makeOrder',
    component: PlaceYourOrderComponent
  },
  {
    path: 'viewOrder',
    component: OrderDetailComponent
  },
  {
    path: 'orderList',
    component: OrderListComponent
  }
];
export const MyRoutesModule: ModuleWithProviders = RouterModule.forRoot(routes);

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { FoodComponent } from './food/food.component';
import { UserComponent } from './user/user.component';
import { OrderComponent } from './order/order.component';
import { CartComponent } from './cart/cart.component';
import { ShopComponent } from './shop/shop.component';
import { Routes, RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  {path:"articles", component: FoodComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    FoodComponent,
    UserComponent,
    OrderComponent,
    CartComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SingleFoodComponent } from './single-food/single-food.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import * as firebase from 'firebase';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';

const appRoutes: Routes = [
  {path:"articles", component: ShopComponent},
  {path:"articles/:id", component: SingleFoodComponent},
  {path:"signup", component: SignupComponent},
  {path:"signin", component: SigninComponent},
  {path:"", redirectTo: "/articles", pathMatch: 'full'},
  {path:"**", component: PageNotFoundComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    FoodComponent,
    UserComponent,
    OrderComponent,
    CartComponent,
    ShopComponent,
    SingleFoodComponent,
    PageNotFoundComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor() {
    var config = {
      apiKey: "AIzaSyC24eRgymjMh6nET5cL7LthyY92oNwyoj0",
      authDomain: "ecom-39fa6.firebaseapp.com",
      databaseURL: "https://ecom-39fa6.firebaseio.com",
      projectId: "ecom-39fa6",
      storageBucket: "",
      messagingSenderId: "748166836618"
    };
    firebase.initializeApp(config);  
  }
}

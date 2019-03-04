import { Injectable } from '@angular/core';
import { Food } from '../models/food.mock';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  articles: Food[] = [
    new Food(1, "Carotte", 12, "Légume", "https://via.placeholder.com/300x150"),
    new Food(2, "Haricot", 6, "Légume"),
    new Food(3, "Courgette", 9, "Légume"),
    new Food(4, "Radit", 25, "Légume"),
    new Food(5, "Poivrons", 3, "Légume")
  ];

  constructor() { }

  getFoods(): Observable<Food[]> {
    return of(this.articles);
  }

  getFood(id: number): Observable<Food> {
    return of(this.articles.find(food => food.id === id));
  }
  
}

import { Injectable } from '@angular/core';
import { Food } from '../models/food.mock';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  articleSubject = new Subject<any[]>();
  articles: Food[] = [
    new Food("Carotte", 12, "Légume", "https://via.placeholder.com/300x150"),
    new Food("Haricot", 6, "Légume"),
    new Food("Courgette", 9, "Légume"),
    new Food("Radit", 25, "Légume"),
    new Food("Poivrons", 3, "Légume")
  ];

  constructor() { }

  emitArticleSubject() {
    this.articleSubject.next(this.articles.slice());
  }
  
}

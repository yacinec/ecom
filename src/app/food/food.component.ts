import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit, OnDestroy {

  foods: any[];
  foodSubcription: Subscription;

  constructor(private foodService: FoodService) { }

  ngOnInit() {
    this.foodSubcription = this.foodService.articleSubject.subscribe(
      (foods: any[]) => {
        this.foods = foods;
      }
    );
    this.foodService.emitArticleSubject();
  }

  ngOnDestroy() {
    this.foodSubcription.unsubscribe();
  }
}

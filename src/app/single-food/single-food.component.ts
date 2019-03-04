import { Component, OnInit } from '@angular/core';
import { Food } from '../models/food.mock';
import { FoodService } from '../services/food.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-single-food',
  templateUrl: './single-food.component.html',
  styleUrls: ['./single-food.component.css']
})
export class SingleFoodComponent implements OnInit {

  food: Food;

  constructor(private foodService: FoodService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.foodService.getFood(id)
      .subscribe(food => this.food = food);
  }

  goBack(): void {
    this.location.back();
  }
}

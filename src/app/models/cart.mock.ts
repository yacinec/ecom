import { Food } from './food.mock';

export class Cart {
    product: Food[];
    quantities: number[];
    prices: number[];
    total: number;
}
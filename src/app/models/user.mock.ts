import { Order } from './order.mock';
import { Cart } from './cart.mock';

export class User {
    id: number;
    firstName: string;
    lastName: string;
    orders: Order[];
    cart: Cart;
}
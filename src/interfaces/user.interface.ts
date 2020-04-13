import { Product } from './product.intreface';
import { Cart } from './cart.interface';

export interface User {
  id: string;
  name: string;
  cart: Cart;
  addCart(product: Product): void;
  deleteCart(id: string): void;
  getCart(): Cart;
}

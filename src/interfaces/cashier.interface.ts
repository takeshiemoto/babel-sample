import { Cart } from './cart.interface';

export interface Cashier {
  calcTotal(cart: Cart): number;
}

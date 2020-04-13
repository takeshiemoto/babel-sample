import { Product } from './product.intreface';

export interface Cart {
  products: Product[];
  add(product: Product): void;
  remove(product: Product): void;
}

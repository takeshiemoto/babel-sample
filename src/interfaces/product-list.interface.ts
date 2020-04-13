import { Product } from './product.intreface';

export interface ProductList {
  products: Product[];
  getAll(): Product[];
  getOne(id: string): Product;
  create(productName: string, price: number): void;
  update(product: Product): void;
  delete(product: Product): void;
}

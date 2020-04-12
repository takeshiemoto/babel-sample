import { Counter } from '@/interfaces';

export class CounterService implements Counter {
  private _count: number;
  constructor(initialCount = 0) {
    this._count = initialCount;
  }

  get count() {
    return this._count;
  }

  increment(): void {
    this._count++;
  }

  decrement(): void {
    this._count--;
  }
}

export default new CounterService();

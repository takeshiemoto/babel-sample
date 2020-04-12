import store from '../../store';
import { Store } from 'vuex';
import { RootState } from '@/store/types';
import { Counter } from '@/interfaces';

export class CounterFacade implements Counter {
  constructor(private store: Store<RootState>) {}

  get count(): number {
    return this.store.getters['counter/count'];
  }

  increment(): void {
    this.store.dispatch('counter/increment');
  }

  decrement(): void {
    this.store.dispatch('counter/decrement');
  }
}

export default new CounterFacade(store);

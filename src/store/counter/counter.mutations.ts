import { MutationTree } from 'vuex';
import { CounterState } from '@/store/counter/counter.types';

export const mutations: MutationTree<CounterState> = {
  increment(state) {
    state.count++;
  },
  decrement(state) {
    state.count--;
  },
};

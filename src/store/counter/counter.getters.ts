import { GetterTree } from 'vuex';
import { CounterState } from '@/store/counter/counter.types';
import { RootState } from '@/store/types';

export const getters: GetterTree<CounterState, RootState> = {
  count(state): number {
    return state.count;
  },
  doubleCount(state): number {
    return state.count * 2;
  },
};

import { ActionTree } from 'vuex';
import { RootState } from '@/store/types';
import { CounterState } from './counter.types';

export const actions: ActionTree<CounterState, RootState> = {
  increment({ commit }) {
    commit('increment');
  },
  decrement({ commit }) {
    commit('decrement');
  },
};

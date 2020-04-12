import { Module } from 'vuex';
import { RootState } from '@/store/types';
import { CounterState } from './counter.types';
import { actions } from './counter.actions';
import { getters } from './counter.getters';
import { mutations } from './counter.mutations';

export const state: CounterState = {
  count: 0,
};

const namespaced = true;

export const counter: Module<CounterState, RootState> = {
  namespaced,
  actions,
  state,
  getters,
  mutations,
};

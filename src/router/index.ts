import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/counter-app',
    name: 'Counter',
    component: () => import('../views/Counter.vue'),
  },
  {
    path: '/todo-app',
    name: 'Todo',
    component: () => import('../views/Todo.vue'),
  },
  {
    path: '/counter-vuex-app',
    name: 'CounterVuex',
    component: () => import('../views/CounterVuex.vue'),
  },
  {
    path: '/todo-vuex-app',
    name: 'TodoVuex',
    component: () => import('../views/TodoVuex.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

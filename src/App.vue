<template>
  <v-app>
    <nav>
      <ul class="nav">
        <li class="nav-item">
          <router-link to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/counter-app">Counter</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/todo-app">Todo</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/counter-vuex-app">Counter for Vuex</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/todo-vuex-app">Counter for Vuex</router-link>
        </li>
      </ul>
    </nav>

    <router-view></router-view>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',
});
</script>

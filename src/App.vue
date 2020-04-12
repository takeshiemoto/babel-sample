<template>
  <v-app>
    <v-list nav dense>
      <v-list-item>
        <router-link to="/">Home</router-link>
      </v-list-item>
      <v-list-item>
        <router-link to="/counter-app">Counter</router-link>
      </v-list-item>
      <v-list-item>
        <router-link to="/todo-app">Todo</router-link>
      </v-list-item>
      <v-list-item>
        <router-link to="/counter-vuex-app">Counter for Vuex</router-link>
      </v-list-item>
      <v-list-item>
        <router-link to="/todo-vuex-app">Todo for Vuex</router-link>
      </v-list-item>
    </v-list>
    <router-view></router-view>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',
  data(): { drawer: boolean } {
    return {
      drawer: false,
    };
  },
});
</script>

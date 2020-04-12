<template>
  <div class="counter-vuex">
    <h2>Counter for Vuex</h2>
    <div>{{ count }}</div>
    <v-btn @click="increment()">+</v-btn>
    <v-btn @click="decrement()">-</v-btn>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';

export default Vue.extend({
  name: 'CounterVuex',
  computed: {
    ...mapGetters('counter', ['count']),
  },
  methods: {
    increment() {
      this.$store.dispatch('counter/increment');
    },
    decrement() {
      this.$store.dispatch('counter/decrement');
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

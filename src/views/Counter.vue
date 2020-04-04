<template>
  <div class="counter">
    <div>{{ count }}</div>
    <v-btn @click="increment()">+</v-btn>
    <v-btn @click="decrement()">-</v-btn>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

interface CounterData {
  count: number;
}

export default Vue.extend({
  name: 'Counter',
  data(): CounterData {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement(): void {
      this.count--;
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.counter {
  padding: 20px;
}
</style>

<template>
  <div class="counter">
    <div>{{ count }}</div>
    <v-btn @click="increment()">+</v-btn>
    <v-btn @click="decrement()">-</v-btn>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { Counter } from '@/interfaces';

export default Vue.extend({
  name: 'CounterContainer',
  props: {
    counter: {
      type: Object as PropType<Counter>,
      default: null,
    },
  },
  computed: {
    count(): number {
      return this.counter.count;
    },
  },
  methods: {
    increment(): void {
      this.counter.increment();
    },
    decrement(): void {
      this.counter.decrement();
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

<template>
  <CounterContainer :counter="counter"></CounterContainer>
</template>

<script lang="ts">
import Vue from 'vue';
import CounterContainer from '@/containers/Counter/CounterContainer.vue';
import counter, { CounterService } from '@/classes/Counter';

export default Vue.extend({
  name: 'Counter',
  components: {
    CounterContainer,
  },
  data(): { counter: CounterService } {
    return {
      counter,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

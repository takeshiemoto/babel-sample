<template>
  <CounterContainer :counter="counter"></CounterContainer>
</template>

<script lang="ts">
import Vue from 'vue';
import counter from '@/store/counter/counterFacade';
import CounterContainer from '@/containers/Counter/CounterContainer.vue';
import { Counter } from '@/interfaces';

export default Vue.extend({
  name: 'CounterVuex',
  components: {
    CounterContainer,
  },
  data(): { counter: Counter } {
    return {
      counter,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

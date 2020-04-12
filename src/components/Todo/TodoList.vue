<template>
  <v-list subheader two-line flat>
    <v-subheader>List</v-subheader>
    <v-list-item-group>
      <slot></slot>
    </v-list-item-group>
  </v-list>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TodoList',
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

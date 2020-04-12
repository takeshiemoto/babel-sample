<template>
  <v-list>
    <v-subheader>New Todo</v-subheader>
    <v-list-item>
      <v-text-field
        v-on:keyup.enter="addTodo()"
        v-model="title"
        single-line
        solo
      ></v-text-field>
    </v-list-item>
  </v-list>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TodoForm',
  data(): { title: string } {
    return {
      title: '',
    };
  },
  methods: {
    addTodo() {
      if (!this.title) {
        return;
      }
      this.$emit('submit', this.title);
      this.title = '';
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

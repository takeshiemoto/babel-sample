<template>
  <v-list-item v-if="todo">
    <v-list-item-content>
      <v-list-item-title v-bind:class="{ done: todo.status === 'DONE' }">{{
        todo.name
      }}</v-list-item-title>
    </v-list-item-content>
    <v-list-item-icon @click="updateTodo(todo)">
      <v-icon>mdi-check-circle</v-icon>
    </v-list-item-icon>
    <v-list-item-icon @click="deleteTodo(todo)">
      <v-icon>mdi-delete</v-icon>
    </v-list-item-icon>
  </v-list-item>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { Task } from '@/models/entities';

export default Vue.extend({
  name: 'TodoListItem',
  props: {
    todo: {
      type: Object as PropType<Task>,
      default: null,
    },
  },
  methods: {
    updateTodo() {
      this.$emit('update');
    },
    deleteTodo() {
      this.$emit('delete');
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.done {
  text-decoration: line-through;
}
</style>

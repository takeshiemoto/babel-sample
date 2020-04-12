<template>
  <TodoContainer :todo="todo"></TodoContainer>
</template>

<script lang="ts">
import Vue from 'vue';
import TodoContainer from '@/containers/Todo/TodoContainer.vue';
import todo, { TodoService } from '@/services/todo.service';

export default Vue.extend({
  name: 'Todo',
  components: {
    TodoContainer,
  },
  data(): { todo: TodoService } {
    return {
      todo,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

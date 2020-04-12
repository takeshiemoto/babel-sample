<template>
  <div class="todo">
    <v-card class="mx-auto">
      <TodoHeader></TodoHeader>
      <TodoForm @submit="addTask($event)"></TodoForm>
      <v-divider></v-divider>
      <TodoList>
        <TodoListItem
          v-for="task in todo.tasks"
          :key="task.id"
          :todo="task"
          @update="updateTask(task)"
          @delete="deleteTask(task)"
        ></TodoListItem>
      </TodoList>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import TodoHeader from '@/components/Todo/TodoHeader.vue';
import TodoForm from '@/components/Todo/TodoForm.vue';
import TodoList from '@/components/Todo/TodoList.vue';
import TodoListItem from '@/components/Todo/TodoListItem.vue';
import { Todo } from '@/interfaces';
import { Task } from '@/models/entities';

export default Vue.extend({
  name: 'TodoContainer',
  props: {
    todo: {
      type: Object as PropType<Todo>,
      default: null,
    },
  },
  components: {
    TodoHeader,
    TodoForm,
    TodoList,
    TodoListItem,
  },
  methods: {
    addTask(taskName: string) {
      this.todo.addTask(taskName);
    },
    updateTask(task: Task) {
      this.todo.updateTask(task);
    },
    deleteTask(task: Task) {
      this.todo.deleteTask(task);
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.todo {
  padding: 20px;
}
</style>

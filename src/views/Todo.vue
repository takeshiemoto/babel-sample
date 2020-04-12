<template>
  <div class="todo">
    <v-card class="mx-auto">
      <TodoHeader></TodoHeader>
      <TodoForm @submit="addTodo($event)"></TodoForm>
      <v-divider></v-divider>
      <TodoList>
        <TodoListItem
          v-for="todo in todoList"
          :key="todo.id"
          :todo="todo"
          @update="updateTodo(todo)"
          @delete="deleteTodo(todo)"
        ></TodoListItem>
      </TodoList>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from '@/models/entities';
import TodoHeader from '@/components/Todo/TodoHeader.vue';
import TodoForm from '@/components/Todo/TodoForm.vue';
import TodoList from '@/components/Todo/TodoList.vue';
import TodoListItem from '@/components/Todo/TodoListItem.vue';

interface TodoData {
  todoList: Todo[];
  newTodo: string;
}

export default Vue.extend({
  name: 'Todo',
  components: {
    TodoHeader,
    TodoForm,
    TodoList,
    TodoListItem,
  },
  data(): TodoData {
    return {
      todoList: [],
      newTodo: '',
    };
  },
  methods: {
    addTodo(name: string): void {
      this.todoList.push({
        id: uuidv4(),
        name,
        status: 'TODO',
      });
      this.newTodo = '';
    },
    updateTodo(todo: Todo): void {
      this.todoList = this.todoList.map(t => {
        if (todo.id == t.id) {
          return {
            ...todo,
            status: todo.status === 'TODO' ? 'DONE' : 'TODO',
          };
        }
        return t;
      });
    },
    deleteTodo(todo: Todo): void {
      this.todoList = this.todoList.filter(({ id }) => id !== todo.id);
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

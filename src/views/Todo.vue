<template>
  <div class="todo">
    <v-card>
      <v-list subheader two-line flat>
        <v-list-item-group>
          <v-list-item v-for="todo in todoList" :key="todo.id">
            <v-list-item-content>
              <v-list-item-title
                v-bind:class="{ done: todo.status === 'DONE' }"
                >{{ todo.name }}</v-list-item-title
              >
              <v-btn
                v-if="todo.status !== 'DONE'"
                @click="updateTodo(todo.id)"
                small
                >Done</v-btn
              >
              <v-btn
                v-if="todo.status === 'DONE'"
                @click="resumeTodo(todo.id)"
                small
                >Resume</v-btn
              >
              <v-btn @click="removeTodo(todo.id)" small>Remove</v-btn>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <v-text-field
        v-on:keyup.enter="addTodo()"
        v-model="todo"
        label="New TODO"
        single-line
        solo
      ></v-text-field>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from '@/Models/entities';

interface TodoData {
  todoList: Todo[];
  todo: string;
}

export default Vue.extend({
  name: 'Todo',
  data(): TodoData {
    return {
      todoList: [
        {
          id: '1',
          name: 'Shopping',
          status: 'TODO',
        },
      ],
      todo: '',
    };
  },
  methods: {
    addTodo(): void {
      this.todoList.push({
        id: uuidv4(),
        name: this.todo,
        status: 'TODO',
      });
      this.todo = '';
    },
    removeTodo(id: string): void {
      this.todoList = this.todoList.filter(todo => todo.id !== id);
    },
    updateTodo(id: string): void {
      this.todoList = this.todoList.map(todo =>
        todo.id === id ? Object.assign(todo, { status: 'DONE' }) : todo,
      );
    },
    resumeTodo(id: string): void {
      this.todoList = this.todoList.map(todo =>
        todo.id === id ? Object.assign(todo, { status: 'TODO' }) : todo,
      );
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.todo {
  padding: 20px;
}
.done {
  text-decoration: line-through;
}
</style>

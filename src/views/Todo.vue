<template>
  <div class="todo">
    <v-card class="mx-auto" max-width="475">
      <v-toolbar color="teal" dark>
        <v-toolbar-title>Todo App</v-toolbar-title>
      </v-toolbar>
      <v-list>
        <v-subheader>New Todo</v-subheader>
        <v-list-item>
          <v-text-field
            v-on:keyup.enter="addTodo()"
            v-model="newTodo"
            single-line
            solo
          ></v-text-field>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list subheader two-line flat>
        <v-subheader>List</v-subheader>
        <v-list-item-group>
          <template v-for="(todo, index) in todoList">
            <v-list-item :key="todo.id">
              <v-list-item-content>
                <v-list-item-title
                  v-bind:class="{ done: todo.status === 'DONE' }"
                  >{{ todo.name }}</v-list-item-title
                >
              </v-list-item-content>
              <v-list-item-icon @click="updateTodo(todo)">
                <v-icon>mdi-check-circle</v-icon>
              </v-list-item-icon>
              <v-list-item-icon @click="deleteTodo(todo)">
                <v-icon>mdi-delete</v-icon>
              </v-list-item-icon>
            </v-list-item>
            <v-divider
              v-if="index + 1 < todoList.length"
              :key="index"
            ></v-divider>
          </template>
        </v-list-item-group>
      </v-list>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from '@/Models/entities';

interface TodoData {
  todoList: Todo[];
  newTodo: string;
}

export default Vue.extend({
  name: 'Todo',
  data(): TodoData {
    return {
      todoList: [],
      newTodo: '',
    };
  },
  methods: {
    addTodo(): void {
      if (!this.newTodo) {
        return;
      }
      this.todoList.push({
        id: uuidv4(),
        name: this.newTodo,
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
.done {
  text-decoration: line-through;
}
</style>

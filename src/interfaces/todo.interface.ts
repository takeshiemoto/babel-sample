import { Task } from '@/models/entities';

export interface Todo {
  tasks: Task[];
  addTask(taskName: string): void;
  deleteTask(task: Task): void;
  updateTask(task: Task): void;
}

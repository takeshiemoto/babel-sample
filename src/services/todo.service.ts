import { Task } from '@/models/entities';
import { Todo } from '@/interfaces/todo.interface';
import { v4 as uuidv4 } from 'uuid';

export class TodoService implements Todo {
  constructor(initialTasks: Task[] = []) {
    this._tasks = initialTasks;
  }

  private _tasks: Task[] = [];

  get tasks(): Task[] {
    return this._tasks;
  }

  addTask(name: string): void {
    this._tasks.push({
      id: uuidv4(),
      name,
      status: 'TODO',
    });
  }

  updateTask(task: Task): void {
    this._tasks = this._tasks.map(t => {
      if (task.id == t.id) {
        return {
          ...task,
          status: task.status === 'TODO' ? 'DONE' : 'TODO',
        };
      }
      return t;
    });
  }

  deleteTask(task: Task): void {
    this._tasks = this._tasks.filter(({ id }) => id !== task.id);
  }
}

export default new TodoService();

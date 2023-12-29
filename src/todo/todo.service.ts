// Assuming this is the beginning of your todo.service.ts file

import { Injectable } from '@nestjs/common';

// Update your Todo type
type Todo = {
  id: string;
  title?: string;
  description?: string;
  completed?: boolean;
};

@Injectable()
export class TodoService {
  // Update the type of 'todos' array
  private todos: Todo[] = [];

  findAll(): Todo[] {
    return this.todos;
  }

  findOne(id: string): Todo | null {
    return this.todos.find(todo => todo.id === id) || null;
  }

  create(data: Partial<Todo>): Todo {
    // Update this line to handle optional properties
    const newTodo: Todo = { id: Date.now().toString(), ...(data || {}) };
    this.todos.push(newTodo);
    return newTodo;
  }

  update(id: string, data: Partial<Todo>): Todo | null {
    const index = this.todos.findIndex(todo => todo.id === id);

    if (index !== -1) {
      // Update this line to handle optional properties
      this.todos[index] = { ...this.todos[index], ...(data || {}) };
      return this.todos[index];
    }

    return null;
  }

  remove(id: string): Todo | null {
    const index = this.todos.findIndex(todo => todo.id === id);

    if (index !== -1) {
      const removedTodo = this.todos[index];
      this.todos.splice(index, 1);
      return removedTodo;
    }

    return null;
  }
}

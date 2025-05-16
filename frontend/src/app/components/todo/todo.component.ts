import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';
import { TodoService } from '../../services/todo.service';

export interface TodoItem {
  _id: string;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo',
  standalone: true,
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  imports: [NgFor, NgClass]
})
export class TodoComponent implements OnInit {
  todoList: TodoItem[] = [];
  @ViewChild('todoText') todoInputRef: ElementRef<HTMLInputElement> = null!;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos(): void {
    this.todoService.getTodos().subscribe({
      next: (data) => {
        this.todoList = data;
      },
      error: (err) => console.error('Error fetching todos', err)
    });
  }

  addTask(): void {
    const text = this.todoInputRef.nativeElement.value.trim();
    if (text !== '') {
      const newTodoItem = { title: text, completed: Boolean(false) };
      this.todoService.addTodo(newTodoItem).subscribe({
        next: (addedTodo) => {
          this.todoList.push(addedTodo);
          this.todoInputRef.nativeElement.value = '';
        },
        error: (err) => console.error('Error adding todo', err)
      });
    }
  }

  deleteTask(id: string): void {
    this.todoService.deleteTodo(id).subscribe({
      next: () => {
        this.todoList = this.todoList.filter(item => item._id !== id);
      },
      error: (err) => console.error('Error deleting todo', err)
    });
  }

  toggleCompleted(id: string): void {
    const todoItem = this.todoList.find(item => item._id === id);
    if (todoItem) {
      const updatedTodo = { title: todoItem.title, completed: !todoItem.completed };
      this.todoService.updateTodo(id.toString(), updatedTodo).subscribe({
        next: () => {
          todoItem.completed = !todoItem.completed;
        },
        error: (err) => console.error('Error updating todo', err)
      });
    }
  }
}

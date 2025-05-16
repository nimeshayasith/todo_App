import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiUrl = 'http://localhost:5000/api/tasks'; // Backend URL

  constructor(private http: HttpClient) {}

  getTodos(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  addTodo(todo: { title: string, completed: boolean }): Observable<any> {
    return this.http.post(`${this.apiUrl}/todo`, todo);
  }

  updateTodo(id: string, updatedTodo: { title: string, completed: boolean }): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, updatedTodo);
  }

  deleteTodo(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}

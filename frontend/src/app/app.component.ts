import { Component } from '@angular/core';
import { TodoComponent } from './components/todo/todo.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [TodoComponent]
})

export class AppComponent {
 title = 'frontend';
}
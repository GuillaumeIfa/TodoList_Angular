import { Injectable } from '@angular/core';
import { todo } from './interfaces/todo.interface';

@Injectable({
	providedIn: 'root'
})

export class TodoService {
	toggleInput: boolean = false;
	todolist: Array<todo> = [
		{ text: 'Double cliquez sur la tâche ou la description pour l\'éditer', description: " le bouton \"a faire\" est cliquable ;)", done: false },
		{ text: 'Test', description: 'ceci est une description', done: false },
		{ text: 'bilibili', done: false }
	];

	getTodolist() {
		return this.todolist;
	}

	setNewTodo(newTodo: todo) {
		this.todolist.push(newTodo);
	}

	deleteTodo(index: number) {
		this.todolist.splice(index, 1);
	}
}
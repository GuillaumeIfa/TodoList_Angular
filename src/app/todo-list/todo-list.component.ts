import { Component, OnInit } from '@angular/core';
import { todo } from '../interfaces/todo.interface';
import { TodoService } from '../todoList.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  
  toggleInput:boolean = false;

  todo:todo;
  index:number;
  todolist: Array<todo> = [];

  constructor(private todoServ: TodoService) { }


  supprimer(index: number) {
	this.todoServ.deleteTodo(index);
  }
  
  toInput( index: number) {
	this.index = index;
	this.toggleInput = true;
  }

  toggleInputFalse() {
	// this.todoServ.setNewTodo();
	this.toggleInput = false;
	this.index = null;
  }

  ngOnInit() {
	this.todolist = this.todoServ.getTodolist();
  }

}

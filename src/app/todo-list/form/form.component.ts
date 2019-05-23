import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { todo } from 'src/app/interfaces/todo.interface';
import { TodoService } from 'src/app/todoList.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  text:string;
  desc:string;
  done:boolean = false;
  test:todo;

  constructor(private todoServ: TodoService) { }

  envoyer() {
    if(this.text){
      this.test = {
        text: this.text,
        description: this.desc,
        done: this.done 
      }
      this.todoServ.setNewTodo(this.test);
      this.text = "";
      this.desc = "";
      this.done = false;
    }
  }

  ngOnInit() {
  }

}

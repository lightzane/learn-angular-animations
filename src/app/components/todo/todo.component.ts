import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { myFadeIn } from '../../shared/animations/my-animations';
import { Todo } from '../../shared/interfaces/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  animations: [
    myFadeIn
    // trigger('myFadeIn', [
    //   transition(':enter', [
    //     style({ opacity: 0, transform: 'rotate(30deg) translateX(-50%)', background: 'lightskyblue' }),
    //     animate('0.5s ease-out')
    //   ])
    // ])
  ]
})
export class TodoComponent implements OnInit {

  @Input() index: number;
  @Input() todo: Todo;

  @Output() removeEmitter = new EventEmitter<number>();
  @Output() updateEmitter = new EventEmitter<Todo>();

  isHeart: boolean = false;
  isDone: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  heart(): void {
    this.isHeart = !this.isHeart;
  }

  done(): void {
    this.isDone = !this.isDone;
  }

  remove(index: number): void {
    this.removeEmitter.emit(index);
  }

  updateTodo(): void {
    this.updateEmitter.emit(this.todo);
  }

}

import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TodoFormDialogComponent } from '../../components/todo-form-dialog/todo-form-dialog.component';
import { pop, myFadeOut, myListAnimation } from '../../shared/animations/my-animations';
import { Todo } from '../../shared/interfaces/todo';
import { mockTodos } from '../../shared/mocks/todos.mock';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.scss'],
  animations: [
    myListAnimation,
    myFadeOut,
    pop
  ]
})
export class TodoContainerComponent implements OnInit, AfterViewInit {

  todos: Todo[] = JSON.parse(localStorage.getItem('todos')) || [];
  isViewInit: boolean = false;

  private todoImages = [
    'https://play-lh.googleusercontent.com/XranFJGXPq2FLccLe8DiQ-O9UpYBbUoKIDqZ7LKB2t7wlc9TUwhriujLELd6djTUVkA',
    'https://play-lh.googleusercontent.com/3-AOeSSoqN3IK750gMz4FwOJw0MnIT-_dSA2Ujs9MzcS5bMaV9bwTBwH2udoEmBsBKY',
    'https://encdn.ldmnq.com/faq/images/en/e46cc33b-bad5-4d20-8e44-3c8b6873b6ae.jpg',
    'https://preview.redd.it/ut98uu6sk8u41.png?width=640&crop=smart&auto=webp&s=5b4d46e378c254f34aef0cf35bfeb9909079dd41',
    'https://play-lh.googleusercontent.com/XranFJGXPq2FLccLe8DiQ-O9UpYBbUoKIDqZ7LKB2t7wlc9TUwhriujLELd6djTUVkA'
  ];

  constructor(
    private dialog: MatDialog,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
    if (!this.todos.length) {
      for (let i = 0; i < this.todoImages.length; i++) {
        const x = i + 1;
        const title = i == 4 ? 'Play Sky Children of the Light' : undefined;
        const subtitle = title;
        this.todos.splice(0, 0, {
          title: title || `Title-${x}`,
          subtitle: subtitle || `Title-${x}`,
          imgUrl: this.todoImages[i],
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis officia, nulla facere excepturi odit esse asperiores ab eligendi expedita aliquid similique sit distinctio error, saepe quia corrupti reiciendis, omnis exercitationem.'
        });
      }
      for (let todo of mockTodos) {
        this.todos.splice(0, 0, todo);
      }
    }
  }

  ngAfterViewInit(): void {
    // to prevent Error: NG0100: ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: 'false'. Current value: 'true'
    setTimeout(() => this.isViewInit = true, 50);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(TodoFormDialogComponent, {
      maxWidth: '500px',
      minWidth: '375px',
      data: { new: true }
    });
    dialogRef.afterClosed().subscribe((todo: Todo) => {
      if (todo) {
        todo.subtitle = todo.title;
        this.todos.splice(0, 0, todo);
        this.snackbar.open('TODO: ' + todo.title);
        this.saveTodos();
      }
    });
  }

  updateTodo(todo: Todo, index?: number): void {
    const dialogRef = this.dialog.open(TodoFormDialogComponent, {
      maxWidth: '500px',
      minWidth: '375px',
      data: { new: false, todo }
    });
    dialogRef.afterClosed().subscribe((todo: Todo) => {
      if (todo) {
        this.todos[index].title = todo.title;
        this.todos[index].subtitle = todo.title;
        this.todos[index].description = todo.description;
        this.snackbar.open('TODO updated: ' + todo.title);
        this.saveTodos();
      }
    });
  }

  remove(event: number): void {
    this.todos.splice(event, 1);
    // this.todos = this.todos.filter((todo, index) => index !== event); // same 'end' with above line
    this.snackbar.open('Removed successfully');
    this.saveTodos();
  }

  /**
   * Save `todos` to localStorage
   */
  saveTodos(): void {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

}

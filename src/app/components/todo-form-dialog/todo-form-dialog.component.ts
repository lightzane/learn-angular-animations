import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Todo } from '../../shared/interfaces/todo';

@Component({
  selector: 'app-todo-form-dialog',
  templateUrl: './todo-form-dialog.component.html',
  styleUrls: ['./todo-form-dialog.component.scss']
})
export class TodoFormDialogComponent implements OnInit {

  todoForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) private todo: Todo,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.todoForm = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(50)]],
      description: ['', [Validators.maxLength(235)]]
    });

    if (this.todo) {
      this.title.setValue(this.todo.title);
      this.description.setValue(this.todo.description);
    }
  }

  get title(): AbstractControl {
    return this.todoForm.get('title');
  }

  get description(): AbstractControl {
    return this.todoForm.get('description');
  }

}

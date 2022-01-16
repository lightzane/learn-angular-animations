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
    // public data ==> html can use "data" variable
    // private data ==> html can't find "data" variable and is an unknown property
    @Inject(MAT_DIALOG_DATA) public data: { new: boolean, todo: Todo; },
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.todoForm = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(50)]],
      description: ['', [Validators.maxLength(235)]]
    });

    if (this.data.todo) this.title.setValue(this.data.todo.title);
    if (this.data.todo?.description) this.description.setValue(this.data.todo.description);
  }

  get title(): AbstractControl {
    return this.todoForm.get('title');
  }

  get description(): AbstractControl {
    return this.todoForm.get('description');
  }

}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { TodoContainerComponent } from './containers/todo-container/todo-container.component';
import { TodoComponent } from './components/todo/todo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoFormDialogComponent } from './components/todo-form-dialog/todo-form-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoContainerComponent,
    TodoComponent,
    TodoFormDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  providers: [{
    provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
    useValue: {
      duration: 5000,
      // horizontalPosition: 'left',
      // verticalPosition: 'top'
    }
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

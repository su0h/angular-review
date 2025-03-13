import { Component, output } from '@angular/core';
import { Task } from '../task/task.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  isCancelButtonClickedEmitter = output<boolean>();
  isCreateButtonClickedEmitter = output<Task>();

  taskTitle: string = '';
  taskSummary: string = '';
  taskDueDate: string = '';

  onClickCancelButton() {
    this.isCancelButtonClickedEmitter.emit(true);
  }

  onClickCreateButton() {
    const newTask = {
      id: "NaN", 
      userId: "TODO", 
      title: this.taskTitle, 
      summary: this.taskTitle, 
      dueDate: this.taskDueDate + ""
    }

    this.isCreateButtonClickedEmitter.emit(newTask);
  }
}

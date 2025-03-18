import { Component, inject, input, output } from '@angular/core';
import { NewTaskData, Task } from '../task/task.model';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  userId = input.required<string>();
  isCancelButtonClickedEmitter = output<boolean>();
  taskTitle!: string;
  taskSummary!: string;
  taskDueDate!: string;
  private tasksService = inject(TasksService);

  onClickCancelButton() {
    this.isCancelButtonClickedEmitter.emit(true);
  }

  onClickCreateButton() {
    const newTask = {
      title: this.taskTitle, 
      summary: this.taskSummary, 
      date: this.taskDueDate + ""
    }

    this.tasksService.addTask(newTask, this.userId());
    this.isCancelButtonClickedEmitter.emit(true);
  }
}

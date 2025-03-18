import { Component, inject, input, output } from '@angular/core';
import { Task } from './task.model';
import { DatePipe } from '@angular/common';
import { CardComponent } from "../../shared/card/card.component";
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [DatePipe, CardComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  task = input.required<Task>()
  private tasksService = inject(TasksService);

  onClickCompleteTask() {
    this.tasksService.removeTask(this.task().id);
  }
}

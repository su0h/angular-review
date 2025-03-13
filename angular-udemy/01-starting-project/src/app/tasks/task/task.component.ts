import { Component, input, output } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  task = input.required<Task>()
  completeEmitter = output<string>();

  onClickCompleteTask() {
    this.completeEmitter.emit(this.task().id);
  }
}

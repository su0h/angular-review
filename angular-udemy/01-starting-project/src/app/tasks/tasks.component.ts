import { Component, input, output } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { User } from '../user/user.model';
import { Task } from './task/task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  user = input.required<User>();
  isNewTaskButtonClickedEmitter = output<boolean>();
  newTask = input<Task>();
  tasks = [
    {
      id: 't1', 
      userId: 'u1',
      title: 'Master Angular', 
      summary: 'Learn all the basic and advanced features of Angular & how to apply them.', 
      dueDate: '2025-12-31'
    },
    {
      id: 't2', 
      userId: 'u2',
      title: 'Master This', 
      summary: 'Learn why God.', 
      dueDate: '2025-12-31'
    }, 
    {
      id: 't3', 
      userId: 'u2',
      title: 'Watch This', 
      summary: 'Watch me whip.', 
      dueDate: '2025-12-15'
    }
  ]

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.user().id);
  }

  onClickCompleteTasks(taskId: string) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }

  onClickNewTask() {
    this.isNewTaskButtonClickedEmitter.emit(true);
  }
}

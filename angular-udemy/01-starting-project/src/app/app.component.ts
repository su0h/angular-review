import { Component, output } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';
import { User } from './user/user.model';
import { NewTaskComponent } from "./tasks/new-task/new-task.component";
import { Task } from './tasks/task/task.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent, NewTaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users: User[] = DUMMY_USERS.map(user => new User(user.id, user.name, user.avatar));
  selectedUserId: string = '';
  isNewTaskFormVisible: boolean = false;
  newTask!: Task;

  get selectedUser() {
    return this.users.find((user: User) => user.id === this.selectedUserId)!;
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }

  onClickNewTaskButton() {
    this.isNewTaskFormVisible = true;
  }

  onClickCancelButton() {
    this.isNewTaskFormVisible = false;
  }

  onClickCreateButton(newTask: Task) {
    newTask.userId = this.selectedUserId;
    this.newTask = newTask;
    this.isNewTaskFormVisible = false;
  }
}

import { Injectable } from "@angular/core";
import { NewTaskData } from "./task/task.model";

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks = [
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

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
        this.tasks = JSON.parse(tasks);
    }
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(taskData: NewTaskData, userId: string) {
    const task = {
      id: new Date().getTime().toString(), 
      userId: userId,
      title: taskData.title, 
      summary: taskData.summary, 
      dueDate: taskData.date
    }
    this.tasks.unshift(task);
    this.saveTasks();
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
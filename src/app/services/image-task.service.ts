import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ImageTask } from '../interface/image-task-interface';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  public tasks: ImageTask[] = [];

  getTasks(): Observable<ImageTask[]> {
    return of(this.tasks);
  }

  addTask(task: ImageTask): void {
    this.tasks.push(task);
  }
}

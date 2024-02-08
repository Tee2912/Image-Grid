import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ImageTask } from 'src/app/interface/image-task-interface';
import { TaskService } from 'src/app/services/image-task.service';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.scss'],
})
export class FullScreenOverlayComponent {
  @Input() selectedImageUrl: string | null = null;
  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  taskForm: FormGroup;

  constructor(private fb: FormBuilder, private taskService: TaskService) {
    this.taskForm = this.fb.group({
      task: ['', Validators.required],
      status: ['To Do', Validators.required],
    });
  }

  closeModal(): void {
    this.close.emit();
  }

  assignTask(): void {
    const task = this.taskForm.get('task')?.value;
    const status = this.taskForm.get('status')?.value;

    if (task && status) {
      const taskId = Math.floor(Math.random() * 1000000);
      const imageId = this.selectedImageUrl; // Replace with the actual image ID

      const imageTask: ImageTask = {
        id: taskId,
        imageId: imageId,
        task: task,
        status: status,
      };

      this.taskService.addTask(task);
      console.log(imageTask);
      this.taskForm.reset();
    }
  }
}

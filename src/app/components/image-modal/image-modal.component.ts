import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ImagesService } from 'src/app/services/images.service';
import { Image } from 'src/app/interface/image';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.scss'],
})
export class ImageModalComponent {
  @Input() selectedImage: Image | undefined;
  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  taskForm: FormGroup;

  constructor(private fb: FormBuilder, private imagesService: ImagesService) {
    this.taskForm = this.fb.group({
      task: ['', Validators.required],
    });
  }

  closeModal(): void {
    this.close.emit();
  }

  assignTask(): void {
    const task = this.taskForm.get('task')?.value;

    if (task) {
      const id = this.selectedImage!.id;
      const url = this.selectedImage!.url; // Replace with the actual image ID

      const imageTask: Image = {
        id: id,
        url: url,
        assignedToTask: task,
      };
      this.imagesService.assignImageToTask(id);
      console.log(imageTask);
      this.taskForm.reset();
    }
    this.closeModal();
  }
}

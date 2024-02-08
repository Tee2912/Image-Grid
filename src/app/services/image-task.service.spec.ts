import { TestBed } from '@angular/core/testing';

import { TaskService } from './image-task.service';

describe('ImageTaskService', () => {
  let service: TaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

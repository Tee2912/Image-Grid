import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedImageComponent } from './assigned-image.component';

describe('AssignedImageComponent', () => {
  let component: AssignedImageComponent;
  let fixture: ComponentFixture<AssignedImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignedImageComponent]
    });
    fixture = TestBed.createComponent(AssignedImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

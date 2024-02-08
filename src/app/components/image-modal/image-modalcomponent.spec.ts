import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullScreenOverlayComponent } from './image-modal.component';

describe('FullScreenOverlayComponent', () => {
  let component: FullScreenOverlayComponent;
  let fixture: ComponentFixture<FullScreenOverlayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FullScreenOverlayComponent],
    });
    fixture = TestBed.createComponent(FullScreenOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

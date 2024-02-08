import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-image-grid',
  templateUrl: './image-grid.component.html',
  styleUrls: ['./image-grid.component.scss'],
})
export class ImageGridComponent implements OnInit {
  images$!: Observable<string[]>;
  currentPage = 1;
  pageSize = 16; // Adjust the number of images per page
  totalPages$!: Observable<number>;
  selectedImageUrl: string | null = null;

  constructor(private images_service: ImagesService) {}

  ngOnInit(): void {
    this.loadImages();
  }

  loadImages(): void {
    this.images$ = this.images_service.getImages(
      this.currentPage,
      this.pageSize
    );
    this.totalPages$ = this.images_service.getTotalPages(this.pageSize);
  }

  nextPage(): void {
    this.currentPage++;
    this.loadImages();
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadImages();
    }
  }

  openModal(imageUrl: string): void {
    this.selectedImageUrl = imageUrl;
  }

  closeModal(): void {
    this.selectedImageUrl = null;
  }

  onImageClick(imageUrl: string): void {
    this.selectedImageUrl = imageUrl;
  }
}

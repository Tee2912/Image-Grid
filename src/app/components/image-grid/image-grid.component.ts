import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ImagesService } from 'src/app/services/images.service';
import { Image } from 'src/app/interface/image';

@Component({
  selector: 'app-image-grid',
  templateUrl: './image-grid.component.html',
  styleUrls: ['./image-grid.component.scss'],
})
export class ImageGridComponent implements OnInit {
  images$!: Observable<Image[]>;
  currentPage = 1;
  pageSize = 16; // Adjust the number of images per page
  totalPages$!: Observable<number>;
  selectedImage: Image | undefined;

  constructor(private imagesService: ImagesService) {}

  ngOnInit(): void {
    this.loadImages();
    this.imagesService.getImageList().subscribe(() => {});
  }

  loadImages(): void {
    this.images$ = this.imagesService.getUnassignedImagesPage(
      this.currentPage,
      this.pageSize
    );

    this.totalPages$ = this.imagesService.getTotalPages(this.pageSize);
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

  openModal(imageUrl: Image): void {
    this.selectedImage = imageUrl;
  }

  closeModal(): void {
    this.selectedImage = undefined;
  }

  onImageClick(image: Image): void {
    this.selectedImage = image;
  }
}

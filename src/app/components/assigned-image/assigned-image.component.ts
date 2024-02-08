import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Image } from 'src/app/interface/image';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-assigned-image',
  templateUrl: './assigned-image.component.html',
  styleUrls: ['./assigned-image.component.scss'],
})
export class AssignedImageComponent {
  images$!: Observable<Image[]>;
  currentPage = 1;
  pageSize = 16;
  totalPages$!: Observable<number>;
  selectedImage: Image | undefined;

  constructor(private imagesService: ImagesService) {}

  ngOnInit(): void {
    this.loadImages();
  }

  loadImages(): void {
    this.images$ = this.imagesService.getAssignedImagesPage(
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

  // onImageClick(image: Image): void {
  //   this.selectedImage = image;
  // }
}

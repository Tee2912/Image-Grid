import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Image } from '../interface/image';

@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  apiUrl = '/sfe-images/image_paths.txt';
  imageList: BehaviorSubject<Image[]> = new BehaviorSubject<Image[]>([]);
  imageData: Image[] = [];

  constructor(private http: HttpClient) {}

  getImageList(): Observable<void> {
    return this.http.get(this.apiUrl, { responseType: 'text' }).pipe(
      map((data) => data.split('\n')),
      map((urls) =>
        urls.map((url, index) => ({
          id: index,
          url: url.trim(),
          assignedToTask: false,
        }))
      ),
      map((images) => {
        this.imageList.next(images);
        this.imageData = images;
      })
    );
  }

  getImagesObservable(): Observable<Image[]> {
    return this.imageList.asObservable();
  }

  getImagesPage(page: number, pageSize: number): Observable<Image[]> {
    return this.imageList.pipe(
      map((allImages: Image[]) => {
        const allImagesArray = allImages;
        const startIndex = (page - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        return allImagesArray.slice(startIndex, endIndex);
      })
    );
  }

  getTotalPages(pageSize: number): Observable<number> {
    return this.imageList.pipe(
      map((allImagesText) => {
        const allImagesArray = allImagesText;
        return Math.ceil(allImagesArray.length / pageSize);
      })
    );
  }

  assignImageToTask(imageId: number): void {
    const imageIndex = this.imageData.findIndex(
      (image) => image.id === imageId
    );
    if (imageIndex !== -1) {
      this.imageData[imageIndex].assignedToTask = true;
      this.imageList.next([...this.imageData]);
    }
  }

  getUnassignedImagesPage(page: number, pageSize: number): Observable<Image[]> {
    return this.imageList.pipe(
      map((allImages: Image[]) => {
        const unassignedImagesArray = allImages.filter(
          (image) => !image.assignedToTask
        );
        const startIndex = (page - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        console.log(unassignedImagesArray.length);
        return unassignedImagesArray.slice(startIndex, endIndex);
      })
    );
  }

  getAssignedImagesPage(page: number, pageSize: number): Observable<Image[]> {
    return this.imageList.pipe(
      map((allImages: Image[]) => {
        console.log(allImages);
        const assignedImagesArray = allImages.filter(
          (image) => image.assignedToTask
        );
        console.log(assignedImagesArray);
        const startIndex = (page - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        return assignedImagesArray.slice(startIndex, endIndex);
      })
    );
  }

  getUnassignedImages(): Observable<Image[]> {
    return this.imageList.pipe(
      map((images) => images.filter((image) => !image.assignedToTask))
    );
  }

  getAssignedImages(): Observable<Image[]> {
    return this.imageList.pipe(
      map((images) => images.filter((image) => image.assignedToTask))
    );
  }
}

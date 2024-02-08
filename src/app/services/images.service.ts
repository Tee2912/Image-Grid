import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  apiUrl = '/sfe-images/image_paths.txt';

  constructor(private http: HttpClient) {}

  getImageList(): Observable<string> {
    return this.http.get(this.apiUrl, { responseType: 'text' });
  }

  getImages(page: number, pageSize: number): Observable<string[]> {
    return this.getImageList().pipe(
      map((allImagesText: string) => {
        const allImagesArray = allImagesText.split('\n');
        const startIndex = (page - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        return allImagesArray.slice(startIndex, endIndex);
      })
    );
  }

  getTotalPages(pageSize: number): Observable<number> {
    return this.getImageList().pipe(
      map((allImagesText) => {
        const allImagesArray = allImagesText.split('\n');
        return Math.ceil(allImagesArray.length / pageSize);
      })
    );
  }
}

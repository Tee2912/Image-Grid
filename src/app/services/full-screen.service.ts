import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FullScreenService {
  isFullScreen = false;

  toggleFullScreen(): void {
    if (this.isFullScreen) {
      this.exitFullScreen();
    } else {
      this.enterFullScreen();
    }
  }

  private enterFullScreen(): void {
    const element = document.documentElement as HTMLElement & {
      mozRequestFullScreen(): Promise<void>;
      webkitRequestFullscreen(): Promise<void>;
      msRequestFullscreen(): Promise<void>;
    };

    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }

    this.isFullScreen = true;
  }

  private exitFullScreen(): void {

    const documentExit = document as Document & {
      mozCancelFullScreen(): Promise<void>;
      webkitExitFullscreen(): Promise<void>;
      msExitFullscreen(): Promise<void>;
    };

    if (documentExit.exitFullscreen) {
      documentExit.exitFullscreen();
    } else if (documentExit.mozCancelFullScreen) {
      documentExit.mozCancelFullScreen();
    } else if (documentExit.webkitExitFullscreen) {
      documentExit.webkitExitFullscreen();
    } else if (documentExit.msExitFullscreen) {
      documentExit.msExitFullscreen();
    }

    this.isFullScreen = false;
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { ImageGridComponent } from './components/image-grid/image-grid.component';
import { ImageModalComponent } from './components/image-modal/image-modal.component';
import { FooterComponent } from './components/footer/footer.component';

import { provideHttpClient } from '@angular/common/http';
import { AssignedImageComponent } from './components/assigned-image/assigned-image.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ImageGridComponent,
    ImageModalComponent,
    FooterComponent,
    AssignedImageComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}

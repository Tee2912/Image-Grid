import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageGridComponent } from './components/image-grid/image-grid.component';
import { AssignedImageComponent } from './components/assigned-image/assigned-image.component';

const routes: Routes = [
  { path: 'unassignedComponent', component: ImageGridComponent },
  { path: 'assignedComponent', component: AssignedImageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NotFoundedComponent } from './not-founded.component';

const notFoundedRoutes: Routes = [
  {
    path: '',
    component: NotFoundedComponent
  }
];

@NgModule({
  declarations: [NotFoundedComponent],
  imports: [CommonModule, RouterModule.forChild(notFoundedRoutes)]
})
export class NotFoundedModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundedComponent } from './not-founded.component';
import { RouterModule, Routes } from '@angular/router';

const notFoundedRoutes: Routes = [
  {
    path: '',
    component: NotFoundedComponent,
  },
];

@NgModule({
  declarations: [NotFoundedComponent],
  imports: [CommonModule, RouterModule.forChild(notFoundedRoutes)],
})
export class NotFoundedModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceComponent } from './experience.component';
import { RouterModule, Routes } from '@angular/router';

const experienceRoutes: Routes = [
  {
    path: '',
    component: ExperienceComponent,
  },
];

@NgModule({
  declarations: [ExperienceComponent],
  imports: [CommonModule, RouterModule.forChild(experienceRoutes)],
})
export class ExperienceModule {}

import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ExperienceComponent } from './experience.component';
import { NgModule } from '@angular/core';

const experienceRoutes: Routes = [
  {
    path: '',
    component: ExperienceComponent
  }
];

@NgModule({
  declarations: [ExperienceComponent],
  imports: [CommonModule, RouterModule.forChild(experienceRoutes)]
})
export class ExperienceModule {}

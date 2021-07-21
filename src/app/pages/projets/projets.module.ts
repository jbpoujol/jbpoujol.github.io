import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjetsComponent } from './projets.component';
import { RouterModule, Routes } from '@angular/router';

const projetsRoutes: Routes = [
  {
    path: '',
    component: ProjetsComponent,
  },
];

@NgModule({
  declarations: [ProjetsComponent],
  imports: [CommonModule, RouterModule.forChild(projetsRoutes)],
})
export class ProjetsModule {}

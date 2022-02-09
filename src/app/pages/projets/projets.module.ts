import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProjetsComponent } from './projets.component';

const projetsRoutes: Routes = [
  {
    path: '',
    component: ProjetsComponent
  }
];

@NgModule({
  declarations: [ProjetsComponent],
  imports: [CommonModule, RouterModule.forChild(projetsRoutes)]
})
export class ProjetsModule {}

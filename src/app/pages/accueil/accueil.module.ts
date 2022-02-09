import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgParticlesModule } from 'ng-particles';

const accueilRoutes: Routes = [
  {
    path: '',
    component: AccueilComponent
  }
];
@NgModule({
  declarations: [AccueilComponent],
  imports: [
    CommonModule,
    NgParticlesModule,
    RouterModule.forChild(accueilRoutes)
  ]
})
export class AccueilModule {}

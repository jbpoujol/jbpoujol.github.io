import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccueilComponent } from './accueil.component';
import { RouterModule, Routes } from '@angular/router';
import { NgParticlesModule } from 'ng-particles';

const accueilRoutes: Routes = [
  {
    path: '',
    component: AccueilComponent,
  },
];

@NgModule({
  declarations: [AccueilComponent],
  imports: [
    CommonModule,
    NgParticlesModule,
    RouterModule.forChild(accueilRoutes),
  ],
})
export class AccueilModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AProposComponent } from './a-propos.component';
import { RouterModule, Routes } from '@angular/router';

const aProposRoutes: Routes = [
  {
    path: '',
    component: AProposComponent,
  },
];

@NgModule({
  declarations: [AProposComponent],
  imports: [CommonModule, RouterModule.forChild(aProposRoutes)],
})
export class AProposModule {}

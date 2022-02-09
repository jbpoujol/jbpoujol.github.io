import { RouterModule, Routes } from '@angular/router';
import { AProposComponent } from './a-propos.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

const aProposRoutes: Routes = [
  {
    path: '',
    component: AProposComponent
  }
];

@NgModule({
  declarations: [AProposComponent],
  imports: [CommonModule, RouterModule.forChild(aProposRoutes)]
})
export class AProposModule {}

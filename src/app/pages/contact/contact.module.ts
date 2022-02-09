import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { NgModule } from '@angular/core';

const contactRoutes: Routes = [
  {
    path: '',
    component: ContactComponent
  }
];

@NgModule({
  declarations: [ContactComponent],
  imports: [CommonModule, RouterModule.forChild(contactRoutes)]
})
export class ContactModule {}

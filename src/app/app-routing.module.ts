import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/accueil/accueil.module').then((m) => m.AccueilModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/a-propos/a-propos.module').then((m) => m.AProposModule)
  },
  {
    path: 'experience',
    loadChildren: () => import('./pages/experience/experience.module').then((m) => m.ExperienceModule)
  },
  {
    path: 'projects',
    loadChildren: () => import('./pages/projets/projets.module').then((m) => m.ProjetsModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then((m) => m.ContactModule)
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

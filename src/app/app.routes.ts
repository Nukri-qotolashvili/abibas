import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { MenComponent } from './features/men/men.component';
import { WomenComponent } from './features/women/women.component';
import { KidsComponent } from './features/kids/kids.component';
import { UltraboostComponent } from './features/men/ultraboost/ultraboost.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'men',
    component: MenComponent,
  },
  {
    path: 'men/ultraboost',
    component: UltraboostComponent,
  },
  {
    path: 'women',
    component: WomenComponent,
  },
  {
    path: 'kids',
    component: KidsComponent,
  },
  {
    path: '404',
    component: NotFoundComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '404',
  },
];

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'main',
    loadChildren: () => import('../modules/main/main.module').then(m => m.MainModule)
  },
  {
    path: 'map-basic',
    loadChildren: () => import('../modules/map-basic/map-basic.module').then(m => m.MapBasicModule)
  }
];

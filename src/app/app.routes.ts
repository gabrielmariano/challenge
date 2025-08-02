import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./components/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'search-cep',
    loadChildren: () =>
      import('./components/search-cep/search-cep.module').then(m => m.SearchCepModule)
  },
  {
    path: 'list-cep',
    loadComponent: () =>
      import('./components/list-cep/list-cep').then((m) => m.ListCep),
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];
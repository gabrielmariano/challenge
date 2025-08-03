import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchCep } from './search-cep';

const routes: Routes = [
  { path: '', component: SearchCep }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchCepRoutingModule {}
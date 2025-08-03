import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListCep } from './list-cep';

const routes: Routes = [{ path: '', component: ListCep }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListCepRoutingModule {}


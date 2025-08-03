import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListCep } from './list-cep';
import { ListCepRoutingModule } from './list-cep-routing.module';

@NgModule({
  declarations: [ListCep],
  imports: [CommonModule, ListCepRoutingModule],
})
export class ListCepModule {}


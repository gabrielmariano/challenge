import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchCepRoutingModule } from './search-cep-routing.module';
import { SearchCep } from './search-cep';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    SearchCep,
    SearchCepRoutingModule,
    CommonModule,
    RouterModule
  ]
 
})
export class SearchCepModule {}
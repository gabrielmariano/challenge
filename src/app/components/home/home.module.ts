import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';

import { HomeRoutingModule } from './home-routing.module';
import { Home } from './home';

@NgModule({
  declarations: [Home],
  imports: [
    CommonModule,
    MatGridListModule,
    HomeRoutingModule,
  ]
})
export class HomeModule {}
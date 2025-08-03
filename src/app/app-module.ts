import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';

import { App } from './app';
import { Header } from './components/header/header';
import { routes } from './app.routes';

@NgModule({
  declarations: [App, Header],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MatGridListModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule {}
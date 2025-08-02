import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';



@Component({
  selector: 'app-header',
  imports: [MatGridListModule, MatButtonModule, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})

export class Header {
  constructor(public router: Router) {}

  isSearchRoute(): boolean {
    return this.router.url === '/search-cep';
  }
}



import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})

export class Header {
  constructor(public router: Router) {}

  isSearchRoute(): boolean {
    return this.router.url === '/search-cep';
  }
}



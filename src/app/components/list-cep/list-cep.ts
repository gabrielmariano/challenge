import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list-cep',
  standalone: true, //
  imports: [CommonModule, RouterModule],
  templateUrl: './list-cep.html',
  styleUrls: ['./list-cep.scss']
})
export class ListCep {}

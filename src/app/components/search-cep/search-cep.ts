import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';


@Component({
  standalone: true,
  selector: 'app-search-cep',
  imports: [
    CommonModule,
    RouterModule,
    MatGridListModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  templateUrl: './search-cep.html',
  styleUrls: ['./search-cep.scss']
})
export class SearchCep {
  cepFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^\d{5}-?\d{3}$/),
    this.validateCep
  ]);

  private validateCep(control: FormControl): { [key: string]: any } | null {
    const cep = control.value?.replace(/\D/g, '');
    
    if (!cep || cep.length !== 8) {
      return { invalidCep: true };
    }
    
    return null;
  }

  buscarCep() {
  if (this.cepFormControl.valid && this.cepFormControl.value) {
    const cep = this.cepFormControl.value.replace(/\D/g, '');
    console.log('CEP válido:', cep);
    // Implemente a chamada à API aqui
  }
}
  }
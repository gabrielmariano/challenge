import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-search-cep',
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
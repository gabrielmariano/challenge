import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CepService {
  private readonly viaCepUrl = 'https://viacep.com.br/ws';

  buscarEndereco(cep: string): Observable<any> {
    cep = cep.replace(/\D/g, '');

    if (cep.length !== 8) {
      throw new Error('CEP deve conter 8 dígitos');
    }

    return this.http.get(`${this.viaCepUrl}/${cep}/json`);
  }

  constructor(private http: HttpClient) {

  }
}
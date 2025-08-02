import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface CepHistory {
  cep: string;
  data: any; // Ou use uma interface específica para o retorno da API
  timestamp: Date;
}

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private readonly STORAGE_KEY = 'cepHistory';
  private historySubject = new BehaviorSubject<CepHistory[]>([]);
  history$ = this.historySubject.asObservable();

  constructor() {
    this.loadInitialData();
  }

  private loadInitialData(): void {
    const savedData = localStorage.getItem(this.STORAGE_KEY);
    if (savedData) {
      this.historySubject.next(JSON.parse(savedData));
    }
  }

  addToHistory(cep: string, data: any): void {
    const currentHistory = this.historySubject.value;
    const newEntry = {
      cep,
      data,
      timestamp: new Date()
    };

    // Evita duplicatas
    if (!currentHistory.some(item => item.cep === cep)) {
      const updatedHistory = [newEntry, ...currentHistory].slice(0, 50); // Limita a 50 registros
      this.historySubject.next(updatedHistory);
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(updatedHistory));
    }
  }

  clearHistory(): void {
    this.historySubject.next([]);
    localStorage.removeItem(this.STORAGE_KEY);
  }
}
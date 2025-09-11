import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageHeaderService {
  // Usamos um BehaviorSubject para guardar e emitir o "breadcrumb" atual
  private headerTitle = new BehaviorSubject<string[]>([]);

  // Expomos como um observable público para os componentes "escutarem"
  public currentHeaderTitle = this.headerTitle.asObservable();

  constructor() { }

  // Método que as telas usarão para definir seu próprio título
  setHeader(titleParts: string[]): void {
    this.headerTitle.next(titleParts);
  }
}
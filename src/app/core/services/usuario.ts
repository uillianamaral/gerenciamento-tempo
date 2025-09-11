import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

// Define os tipos de usuário permitidos para evitar erros de digitação
export type UserRole = 'POLICIA MILITAR' | 'POLICIA CIVIL' | 'SUPERVISOR' | null;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  // BehaviorSubject guarda o valor atual e emite para novos inscritos.
  private usuarioAtual = new BehaviorSubject<UserRole>(null);

  // Expomos o usuário como um Observable, que os componentes podem "ouvir".
  public usuarioAtual$ = this.usuarioAtual.asObservable();

  constructor() {
    // SIMULAÇÃO DE LOGIN: Define um usuário padrão ao iniciar o serviço.
    // Mude aqui para testar outros perfis!
    this.setUsuario('POLICIA CIVIL'); 
  }

  // Método que o componente de login (no futuro) usará para definir o usuário.
  public setUsuario(role: UserRole) {
    this.usuarioAtual.next(role);
  }
}
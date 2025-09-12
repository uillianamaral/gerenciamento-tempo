import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// Tipos de usuário para corresponder aos privilégios definidos
export type UserRole = 'SUPERVISAO' | 'PM' | 'PC' | null;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuarioAtual = new BehaviorSubject<UserRole>(null);
  public usuarioAtual$ = this.usuarioAtual.asObservable();

  constructor() {
    // SIMULAÇÃO DE LOGIN: Defina um usuário para testar.
    // Altere para 'PM', 'PC' ou 'SUPERVISAO' para ver os menus diferentes
    this.setUsuario('PM');
  }

  public setUsuario(role: UserRole) {
    this.usuarioAtual.next(role);
  }

  public hasPermission(requiredRoles: UserRole[]): boolean {
    const currentUserRole = this.usuarioAtual.getValue();
    if (!currentUserRole) {
      return false;
    }
    return requiredRoles.includes(currentUserRole);
  }
}
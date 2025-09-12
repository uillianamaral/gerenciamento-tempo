import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UsuarioService } from '../services/usuario';

export const permissaoGuard: CanActivateFn = (route, state) => {
  const usuarioService = inject(UsuarioService);
  const router = inject(Router);

  // Os papéis permitidos virão do `data` da rota
  const rolesPermitidos = route.data?.['roles'] ?? [];
  const temPermissao = usuarioService.hasPermission(rolesPermitidos);

  if (!temPermissao) {
    console.warn('Acesso negado para', state.url);
    router.navigate(['/principal']); 
    return false;
  }

  return true;
};

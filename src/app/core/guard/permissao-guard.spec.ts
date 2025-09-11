import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';
import { permissaoGuard } from './permissao-guard';


describe('permissaoGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => permissaoGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

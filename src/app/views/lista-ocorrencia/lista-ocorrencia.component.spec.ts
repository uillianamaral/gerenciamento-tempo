import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaOcorrenciaComponent } from './lista-ocorrencia.component';

describe('ListaOcorrenciaComponent', () => {
  let component: ListaOcorrenciaComponent;
  let fixture: ComponentFixture<ListaOcorrenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaOcorrenciaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaOcorrenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

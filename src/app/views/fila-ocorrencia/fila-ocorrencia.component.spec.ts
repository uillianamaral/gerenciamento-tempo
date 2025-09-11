import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilaOcorrenciaComponent } from './fila-ocorrencia.component';

describe('FilaOcorrenciaComponent', () => {
  let component: FilaOcorrenciaComponent;
  let fixture: ComponentFixture<FilaOcorrenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilaOcorrenciaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilaOcorrenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

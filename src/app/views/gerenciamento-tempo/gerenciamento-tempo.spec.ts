import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciamentoTempo } from './gerenciamento-tempo';

describe('GerenciamentoTempo', () => {
  let component: GerenciamentoTempo;
  let fixture: ComponentFixture<GerenciamentoTempo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GerenciamentoTempo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GerenciamentoTempo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

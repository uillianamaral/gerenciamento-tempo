import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucessoDialog } from './sucesso-dialog';

describe('SucessoDialog', () => {
  let component: SucessoDialog;
  let fixture: ComponentFixture<SucessoDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SucessoDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SucessoDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

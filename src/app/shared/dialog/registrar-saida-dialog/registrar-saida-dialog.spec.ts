import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrarSaidaDialog } from './registrar-saida-dialog';


describe('RegistrarSaidaDialog', () => {
  let component: RegistrarSaidaDialog;
  let fixture: ComponentFixture<RegistrarSaidaDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarSaidaDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarSaidaDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

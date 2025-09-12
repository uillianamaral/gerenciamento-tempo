import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../modules/material-module';

@Component({
  selector: 'app-registrar-saida-dialog',
  standalone: true,
  imports: [CommonModule, MaterialModule, FormsModule],
  templateUrl: './registrar-saida-dialog.html',
  styleUrls: ['./registrar-saida-dialog.scss']
})
export class RegistrarSaidaDialog {
  motivo: string = '';
  justificativa: string = '';

  constructor(public dialogRef: MatDialogRef<RegistrarSaidaDialog>) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onRegister(): void {
    // Validação final antes de fechar
    if (this.motivo) {
      if (this.motivo === 'Outros' && !this.justificativa.trim()) {
        return; // Não fecha se "Outros" for selecionado e a justificativa estiver vazia
      }
      this.dialogRef.close({ success: true });
    }
  }
}
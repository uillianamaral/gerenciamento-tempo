import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../modules/material-module';

@Component({
  selector: 'app-sucesso-dialog',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './sucesso-dialog.html',
  styleUrls: ['./sucesso-dialog.scss']
})
export class SucessoDialog {
  constructor(
    public dialogRef: MatDialogRef<SucessoDialog>,
    @Inject(MAT_DIALOG_DATA) public data: { message: string }
  ) {}

  close(): void {
    this.dialogRef.close();
  }
}
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialModule } from './modules/material-module';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet></router-outlet>`, // Template pode ser inline
})
export class App {
  
  protected readonly title = signal('app-gerenciamento-tempo');
}

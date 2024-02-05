import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ModalComponent } from './components/modal/modal.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ModalComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AgendaTelefonica';
}

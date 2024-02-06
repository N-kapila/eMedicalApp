import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TextfieldsComponent } from '../components/textfields/textfields.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TextfieldsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'e-HealthHub';
}

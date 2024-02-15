import { Component } from '@angular/core';
import { TextfieldsComponent } from '../../../components/textfields/textfields.component';

@Component({
  selector: 'app-patient-profile',
  standalone: true,
  imports: [TextfieldsComponent],
  templateUrl: './patient-profile.component.html',
  styleUrl: './patient-profile.component.css'
})
export class PatientProfileComponent {
textValue: string = '';
}

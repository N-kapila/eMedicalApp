import { Component } from '@angular/core';
import { TextfieldsComponent } from '../../../components/textfields/textfields.component';

@Component({
  selector: 'app-doctor-profile',
  standalone: true,
  imports: [TextfieldsComponent],
  templateUrl: './doctor-profile.component.html',
  styleUrl: './doctor-profile.component.css'
})
export class DoctorProfileComponent {
userimg : string = '../assets/user.png';
textValue: string = '';
}

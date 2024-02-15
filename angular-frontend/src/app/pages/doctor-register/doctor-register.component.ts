import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TextfieldsComponent } from '../../../components/textfields/textfields.component';

@Component({
  selector: 'app-doctor-register',
  standalone: true,
  imports: [TextfieldsComponent,CommonModule],
  templateUrl: './doctor-register.component.html',
  styleUrl: './doctor-register.component.css'
})
export class DoctorRegisterComponent {
  img1: string = '../assets/image1.png';
profilePic: string | undefined;

  constructor(private router: Router) {}

  navigateToDoctorSignin() {
    this.router.navigate(['/doctor-signin']);
  }

   

  handleFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.profilePic = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
}

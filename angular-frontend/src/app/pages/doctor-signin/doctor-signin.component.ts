import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TextfieldsComponent } from '../../../components/textfields/textfields.component';

@Component({
  selector: 'app-doctor-signin',
  standalone: true,
  imports: [TextfieldsComponent],
  templateUrl: './doctor-signin.component.html',
  styleUrl: './doctor-signin.component.css'
})
export class DoctorSigninComponent {
img2: string = '../assets/image2.png';

 constructor(private router: Router) {}

  navigateToDoctorSignup() {
    this.router.navigate(['/']);
  }

  navigateToForgotPassword(){
    this.router.navigate([]);
  }

  handleClick(): void {
    this.router.navigateByUrl('doctor-register');
  }
}

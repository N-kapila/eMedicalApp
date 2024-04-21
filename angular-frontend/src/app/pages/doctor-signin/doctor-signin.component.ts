import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TextfieldsComponent } from '../../../components/textfields/textfields.component';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-doctor-signin',
  standalone: true,
  imports: [TextfieldsComponent],
  templateUrl: './doctor-signin.component.html',
  styleUrl: './doctor-signin.component.css'
})
export class DoctorSigninComponent {
img2: string = '../assets/image2.png';
email: string = '';
  password: string = '';

  updateEmail(event: any) {
    if (event.target) {
      this.email = event.target.value;
    }
  }

  updatePassword(event: any) {
    if (event.target) {
      this.password = event.target.value;
    }
  }


 constructor(private router: Router,private authService: AuthService) {}

 signIn() {
    this.authService.signIn(this.email, this.password).subscribe(
      (userCredential) => {
        // Sign-in successful, you can navigate or perform other actions here
        console.log('Signed in successfully!', userCredential.user);
        this.router.navigateByUrl('dashboard');
      },
      (error) => {
        // Handle sign-in errors here
        console.error('Sign-in error:', error);
        alert('Sign-in error:'+ error.message)
      }
    );
 }
 
  navigateToDoctorSignup() {
    this.router.navigate(['/']);
  }

  navigateToForgotPassword(){
    this.router.navigate([]);
  }

  // handleClick(): void {
  //   this.router.navigateByUrl('dashboard');
  // }
}

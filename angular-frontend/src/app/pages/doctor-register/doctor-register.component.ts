import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TextfieldsComponent } from '../../../components/textfields/textfields.component';
import { AuthService } from '../../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-doctor-register',
  standalone: true,
  imports: [TextfieldsComponent, CommonModule,ReactiveFormsModule],
  templateUrl: './doctor-register.component.html',
  styleUrl: './doctor-register.component.css',
})
export class DoctorRegisterComponent implements OnInit {
  img1: string = '../assets/image1.png';
  profilePic: string | undefined;
  authService = inject(AuthService);
  form!: FormGroup;

  doctorData = {
    fullName: '',
    doctorId: '',
    speciality: '',
    email: '',
    mobileNumber: '',
    hospitalName: '',
    password: '',
    confirmPassword: '',
  };

  constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      // Define form controls with validators
      fullName: ['', Validators.required],
      doctorId: ['', Validators.required],
      speciality: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobileNumber: ['', Validators.required],
      hospitalName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    });
  }

 onSubmit(): void {
  if (this.form.valid) {
    const { email, password } = this.doctorData;
    this.authService.register(email, password).subscribe(
      () => {
        this.router.navigateByUrl('/doctor-signin');
        console.log('Registration successful.');
      },
      (error) => {
        console.error('Registration error:', error);
        // Handle error here, such as displaying error message to the user
      }
    );
  } else {
    console.log('Form is invalid.');
  }
}


  navigateToDoctorSignin(): void {
  this.router.navigateByUrl('/doctor-signin');
}

  // async handleSignup() {
  //   // Access form values from doctorData object
  //   const {
  //     fullName,
  //     doctorId,
  //     speciality,
  //     email,
  //     mobileNumber,
  //     hospitalName,
  //     password,
  //   } = this.doctorData;

  //   try {
  //     // Authenticate using Firebase email/password method
  //     const credential = await this.fireAuth.createUserWithEmailAndPassword(email, password);

  //     // Add doctor data to Firestore after successful authentication (assuming a Firestore service)
  //     this.firestore
  //       .addDoctor({
  //         fullName,
  //         doctorId,
  //         speciality,
  //         email,
  //         mobileNumber,
  //         hospitalName,
  //       })
  //       .then(() => {
  //         console.log('Doctor registration successful!');
  //         // Handle successful registration (e.g., navigate to another page)
  //         this.router.navigate(['/']); // Redirect to home or appropriate page
  //       })
  //       .catch((error: any) => {
  //         console.error('Error adding doctor data:', error);
  //         // Handle Firestore error (e.g., display error message)
  //       });

  //   } catch (error: any) {
  //     console.error('Error registering doctor:', error);
  //     // Handle Firebase authentication error (e.g., display error message)
  //     if (error.code === 'auth/weak-password') {
  //       console.error('Password is too weak.');
  //     } else if (error.code === 'auth/email-already-in-use') {
  //       console.error('Email address already in use.');
  //     } else {
  //       console.error('Unknown registration error:', error);
  //     }
  //   }
  // }

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

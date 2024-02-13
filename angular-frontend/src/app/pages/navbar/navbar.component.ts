import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { faHouseChimney, faUser, faClipboardList, faList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule,FontAwesomeModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  userimg : string = '../assets/user.png';
  isNavVisible: boolean = false;
  activeLink: string = "";
  faHouseChimney= faHouseChimney;
  faUser = faUser;
  faClipboardList = faClipboardList;
  faList = faList;

  constructor(private router: Router) {}

  navigateToDoctorSignin() {
    this.router.navigate(['/doctor-signin']);
  }

  navigateToPatientRegister() {
    this.router.navigate(['/patient-register']);
  }

  navigateToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  navigateToDoctorProfile(){
    this.router.navigate(['/doctor-profile'])
  }

ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activeLink = event.url;
      }
    });
  }

  toggleNavVisibility() {
    this.isNavVisible = !this.isNavVisible;
  }

  closeNav() {
    this.isNavVisible = false;
  }

}

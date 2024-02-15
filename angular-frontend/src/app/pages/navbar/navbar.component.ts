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

   navigateToPatientList(){
    this.router.navigate(['/patient-list'])
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
    this.setActiveLink();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.setActiveLink();
      }
    });
  }

   setActiveLink(): void {
    this.activeLink = this.router.url;
  }

  toggleNavVisibility() {
    this.isNavVisible = !this.isNavVisible;
  }

  closeNav() {
    this.isNavVisible = false;
  }

}

import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterModule,Event } from '@angular/router';
import { filter } from 'rxjs/operators';
import { faHouseChimney, faUser, faClipboardList, faList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule,FontAwesomeModule],
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

ngOnInit(): void {
    this.router.events
      .pipe(
        filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd)
      )
      .subscribe((event: NavigationEnd) => {
        this.activeLink = event.url;
      });
  }

  toggleNavVisibility() {
    this.isNavVisible = !this.isNavVisible;
  }

  closeNav() {
    this.isNavVisible = false;
  }

}

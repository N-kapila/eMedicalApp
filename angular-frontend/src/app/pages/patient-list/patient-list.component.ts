import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-patient-list',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './patient-list.component.html',
  styleUrl: './patient-list.component.css'
})
export class PatientListComponent {
  faSearch =faSearch;
  searchQuery: string = '';

  onSearchInput(value: string) {
    this.searchQuery = value;
    // You can add additional logic here, such as triggering search functionality
  }

   data = [
    {
      name: "John Doe",
      age: 45,
      currentDisease: "Fever",
      mobileNumber: 123456789,
      nextAppointmentDate: "2024-02-10",
    },
    {
      name: "Jane Smith",
      age: 25,
      currentDisease: "Cough",
      mobileNumber: 123456789,
      nextAppointmentDate: "2024-02-15",
    },
    {
      name: "Alice Johnson",
      age: 40,
      currentDisease: "Headache",
      mobileNumber: 123456789,
      nextAppointmentDate: "2024-02-18",
    },
    {
      name: "Bob Williams",
      age: 32,
      currentDisease: "Back Pain",
      mobileNumber: 123456789,
      nextAppointmentDate: "2024-02-22",
    },
    {
      name: "Eva Davis",
      age: 60,
      currentDisease: "Allergies",
      mobileNumber: 123456789,
      nextAppointmentDate: "2024-02-28",
    },
     {
      name: "",
      age: '',
      currentDisease: "",
      mobileNumber: '',
      nextAppointmentDate: "",
    }
  ];

  constructor(private router: Router) {}

  redirectToPatientProfile() {
    this.router.navigate(['/patient-profile']); 
  }
}

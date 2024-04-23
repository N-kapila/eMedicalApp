import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent {
userimg : string = '../assets/user.png';
chart : string = '../assets/chart.png';

currentMonth: string= '';
  daysInMonth: number[] = [];

  constructor(private router: Router) {
    this.updateCurrentMonth();
  }

  previous() {
    this.updateMonth(-1);
  }

  next() {
    this.updateMonth(1);
  }

  updateMonth(monthsToAdd: number) {
    const newMonth = new Date(this.currentMonth);
    newMonth.setMonth(newMonth.getMonth() + monthsToAdd);
    this.currentMonth = newMonth.toLocaleString('default', { month: 'long', year: 'numeric' });
    this.daysInMonth = this.getDaysInMonth(newMonth.getMonth(), newMonth.getFullYear());
  }

  updateCurrentMonth() {
    const date = new Date();
    this.currentMonth = date.toLocaleString('default', { month: 'long', year: 'numeric' });
    this.daysInMonth = this.getDaysInMonth(date.getMonth(), date.getFullYear());
  }

  getDaysInMonth(month: number, year: number): number[] {
    const date = new Date(year, month, 1);
    const days: number[] = [];
    while (date.getMonth() === month) {
      days.push(date.getDate());
      date.setDate(date.getDate() + 1);
    }
    return days;
  }

  navigateToPatientList() {
    this.router.navigate(['/patient-list']);
  }

  data = [
    {
      name: "John Doe",
      currentDisease: "Fever",
      nextAppointmentDate: "2024-02-10",
    },
    {
      name: "Jane Smith",
      currentDisease: "Cough",
      nextAppointmentDate: "2024-02-15",
    },
    {
      name: "Alice Johnson",
      currentDisease: "Headache",
      nextAppointmentDate: "2024-02-18",
    },
    {
      name: "Bob Williams",
      currentDisease: "Back Pain",
      nextAppointmentDate: "2024-02-22",
    },
    {
      name: "Eva Davis",
      currentDisease: "Allergies",
      nextAppointmentDate: "2024-02-28",
    },
  ];
}



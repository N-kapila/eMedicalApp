import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DoctorProfileComponent } from './pages/doctor-profile/doctor-profile.component';
import { DoctorRegisterComponent } from './pages/doctor-register/doctor-register.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { PatientListComponent } from './pages/patient-list/patient-list.component';
import { PatientRegisterComponent } from './pages/patient-register/patient-register.component';

export const routes: Routes = [
    {
        path:'',
        component:DoctorRegisterComponent,
    },
    {
        path:'doctor-register',
        loadComponent:()=>
            import('./pages/doctor-register/doctor-register.component').then((c)=>c.DoctorRegisterComponent),
    },
    {
        path:'doctor-signin',
        loadComponent:()=>
            import('./pages/doctor-signin/doctor-signin.component').then((c)=>c.DoctorSigninComponent),
    },
     {
        path:'navbar',
        loadComponent:()=>
            import('./pages/navbar/navbar.component').then((c)=>c.NavbarComponent),
    },
  
     {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'navbar',
        component: NavbarComponent 
      },
      {
        path: 'patient-register',
        component: PatientRegisterComponent 
      },
      {
        path: 'dashboard',
        component: DashboardComponent 
      },
      {
        path: 'doctor-profile',
        component: DoctorProfileComponent 
      },
      {
        path: 'patient-list',
        component: PatientListComponent 
      },

    ]
  }
    
];

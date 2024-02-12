import { Routes } from '@angular/router';
import { DoctorRegisterComponent } from './pages/doctor-register/doctor-register.component';

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
    }
];

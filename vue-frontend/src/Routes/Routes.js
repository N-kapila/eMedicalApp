import { createWebHistory, createRouter } from "vue-router";
import DoctorRegister from "../Pages/DoctorRegister.vue";
import DoctorSignin from "../Pages/DoctorSignin.vue";
import Navbar from "../Pages/Navbar.vue";
//import PatientRegister from "./components/PatientRegister.vue";

const routes = [
  {
    path: "/",
    component: DoctorRegister,
  },
  {
    path: "/doctor-register",
    component: DoctorRegister,
  },
  {
    path: "/doctor-signin",
    component: DoctorSignin,
  },
  {
    path: "/navbar",
    component: Navbar,
  },
  //   {
  //     path: "/patient-register",
  //     component: {
  //       template: `
  //         <div class="content">
  //           <Navbar />
  //           <div class="main-content">
  //              <PatientRegister />
  //           </div>
  //         </div>
  //       `,
  //     },
  //   },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

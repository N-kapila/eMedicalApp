import { createWebHistory, createRouter } from "vue-router";
import DoctorRegister from "../Pages/DoctorRegister.vue";
import DoctorSignin from "../Pages/DoctorSignin.vue";
import Navbar from "../Pages/Navbar.vue";
import DoctorProfile from "../Pages/DoctorProfile.vue";
import Dashboard from "../Pages/Dashboard.vue";
import PatientList from "../Pages/PatientList.vue";

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
  {
    path: "/doctor-profile",
    component: DoctorProfile,
  },
  {
    path: "/dashboard",
    component: Dashboard,
  },
  {
    path: "/patient-list",
    component: PatientList,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

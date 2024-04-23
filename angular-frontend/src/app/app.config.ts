import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import {getAuth, provideAuth} from '@angular/fire/auth'
import { provideHttpClient } from '@angular/common/http';

const firebaseConfig = {
  apiKey: "AIzaSyAll0T-vTbug0eW_SWH20KtYiCIqXYFcrI",
  authDomain: "emedicalapp-ff3be.firebaseapp.com", 
  projectId: "emedicalapp-ff3be",
  storageBucket: "emedicalapp-ff3be.appspot.com",
  messagingSenderId: "837318081990",
  appId: "1:837318081990:web:96ee712d1694f46f9b46c7",
  measurementId: "G-NPDTE0STVT"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    importProvidersFrom([
      provideFirebaseApp(() => initializeApp(firebaseConfig)),
      provideFirestore(() => getFirestore()),
      provideAuth(()=>getAuth())
    ]),
    provideHttpClient()
  ],
};

import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from "@angular/common/http";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCI2-n7mgmnaL5eXYUPsICRnMLdO2Fl6Qc",
  authDomain: "smart-manager-ebe21.firebaseapp.com",
  projectId: "smart-manager-ebe21",
  storageBucket: "smart-manager-ebe21.appspot.com",
  messagingSenderId: "406121763483",
  appId: "1:406121763483:web:f23e459a8a902767cd2c3e",
  measurementId: "G-14YJ141EM4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const appConfig: ApplicationConfig = {
    providers: [provideRouter(routes), provideClientHydration(), provideAnimations(), provideHttpClient()]
};

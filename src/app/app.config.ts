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
    apiKey: "AIzaSyDQ4QsQ5w2xJL9clUPsvhWRbYT1fFyCuec",
    authDomain: "performolabs-9643f.firebaseapp.com",
    projectId: "performolabs-9643f",
    storageBucket: "performolabs-9643f.appspot.com",
    messagingSenderId: "517522912277",
    appId: "1:517522912277:web:b1a8253009e63fe1aeca1c",
    measurementId: "G-Y12640164E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const appConfig: ApplicationConfig = {
    providers: [provideRouter(routes), provideClientHydration(), provideAnimations(), provideHttpClient()]
};

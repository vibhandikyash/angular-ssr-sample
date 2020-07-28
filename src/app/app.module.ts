import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { config } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material.module';
var firebaseConfig = {
  apiKey: 'AIzaSyBNrqYBHQdEUIWGwaaEUMrroY0gTMyQO0g',
  authDomain: 'universal-sample.firebaseapp.com',
  databaseURL: 'https://universal-sample.firebaseio.com',
  projectId: 'universal-sample',
  storageBucket: 'universal-sample.appspot.com',
  messagingSenderId: '1020020796431',
  appId: '1:1020020796431:web:76aeaece72202680a7c77a',
};

@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    CommonModule,
    MaterialModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [{ provide: 'LOCALSTORAGE', useFactory: getLocalStorage }],
  bootstrap: [AppComponent],
})
export class AppModule {}
export function getLocalStorage() {
  return typeof window !== 'undefined' ? window.localStorage : null;
}

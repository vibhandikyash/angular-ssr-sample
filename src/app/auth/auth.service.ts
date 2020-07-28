import { Injectable } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: User;
  isLoggedIn: boolean;
  constructor(public afAuth: AngularFireAuth, public router: Router) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.user = user;
        console.log('user', user);
        localStorage.setItem('user', JSON.stringify(user));
      } else {
        localStorage.setItem('user', null);
      }
    });
  }

  async login(email: string, password: string) {
    console.log('email: ', email, 'password: ', password);
    var result = await this.afAuth.signInWithEmailAndPassword(email, password);
    this.isLoggedIn = true;
    console.log(result, 'resullt');
  }

  async logout() {
    await this.afAuth.signOut();
    localStorage.removeItem('user');
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }

  isLogged() {
    if (this.getUser()) this.isLoggedIn = true;
    return this.isLoggedIn;
    // const user = JSON.parse(localStorage.getItem('user'));
    // return user !== null;
  }
  getUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(public authFire: AngularFireAuth) {}

  loginWithEmail(email: string, password: string) {
    return this.authFire
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(JSON.stringify(user));
      });
  }
}

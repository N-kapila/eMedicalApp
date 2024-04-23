import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, UserCredential,signInWithEmailAndPassword } from '@angular/fire/auth';
import { from, Observable } from 'rxjs';
import { getFirestore, collection, doc, getDoc } from '@angular/fire/firestore';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private firebaseAuth: Auth) {}

  register(email: string, password: string): Observable<UserCredential> {
    const promise = createUserWithEmailAndPassword(
      this.firebaseAuth,
      email,
      password
    );
    return from(promise);
  }

  signIn(email: string, password: string): Observable<UserCredential> {
    const promise = signInWithEmailAndPassword(
      this.firebaseAuth,
      email,
      password
    );
    return from(promise);
  }

  getUserData(uid: string): Observable<any> {
    const firestore = getFirestore();
    const userRef = doc(firestore, 'react-doctor-details', uid);

    return from(getDoc(userRef)).pipe(
      catchError((error) => {
        console.error('Error fetching user data:', error);
        return throwError(error);
      })
    );
}

}

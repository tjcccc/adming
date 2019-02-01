import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '@adming/models/user.model';
import { usersApi } from '@adming/config/api.config';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


  registerUser = (newUser: User) => {
    this.http.post(usersApi, JSON.stringify(newUser));
  }

  getUsers = (): Observable<User[]> => {
    return this.http.get<User[]>(usersApi)
      .pipe(
        catchError(this.handleError('getUsers', []))
      );
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '@adming/models/user.model';
import { usersApi } from '@adming/config/api.config';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  registerUser = (newUser: User) => {
    this.http.post(usersApi, JSON.stringify(newUser));
  }

  getUsers = () => {
    return this.http.get(usersApi);
  }
}

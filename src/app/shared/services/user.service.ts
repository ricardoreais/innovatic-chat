import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUser: User;

  constructor() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  get IsLogged() {
    return this.currentUser != null;
  }

  get CurrentUser() {
    return this.currentUser;
  }

  // TODO: Save the user in a database.
  public register(user: User): User {
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.currentUser = user;

    return user;
  }

  // This method contains duplicate code (same as register), but if we had an API it would call 2 different methods.
  // And it would use an http PUT instead (update user) of an http POST (register user).
  public update(user: User): User {
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.currentUser = user;

    return user;
  }

  public getLanguage(): string {
    let language = environment.defaultLanguage;
    const user = this.currentUser;

    // If there is an active user get his preferred language.
    if (user) {
      language = user.language;
    }

    return language;
  }
}

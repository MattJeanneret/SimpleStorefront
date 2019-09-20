import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUser } from 'src/app/interface/IUser';

//Maintains the logged in state of the app. 
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // Wrap the login state with a Subject. This controls update access to the data
  private _loginState  = new BehaviorSubject<IUser>({
    userName: 'smittywerbenjagermanjensen',
    id: '1',
    isLoggedIn: false
  });

  // expose a readonly subscribable observable of the user. Subscribers would subscribe to this object to get updates on the user;
  readonly loginState$ = this._loginState.asObservable();

  //Gets the current value of user.
  private get user(): IUser {
    return this._loginState.getValue();
  }

  /**
   * updates the current user
   */
  private set user(user: IUser) {
    this._loginState.next(user);
  }

  /**
   * Logins in the user
   */
  public login(): Observable<IUser> {
      let user = this.user;
      user.isLoggedIn = true;
      this.user = user;
      return this.loginState$;
  }

  /**
   * logs out the user
   */
  public logout(): Observable<IUser> {
    let user = this.user;
    this.user.isLoggedIn = false;
    this.user = user;
    return this.loginState$;
  }
}

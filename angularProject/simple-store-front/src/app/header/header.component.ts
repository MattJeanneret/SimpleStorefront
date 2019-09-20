import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginService } from '../services/loginService/login.service';
import { IUser } from '../interface/IUser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']})
export class HeaderComponent implements OnInit, OnDestroy {

  private _loginSubscription: Subscription;
  private _loginService: LoginService;

  public isLoggedIn: boolean;

  constructor(loginService: LoginService, private _changeDetectorRef: ChangeDetectorRef) {
    this._loginService = loginService;
  }

  ngOnInit() {
    this._loginSubscription = this._loginService.loginState$.subscribe((user: IUser) => {
      this.isLoggedIn = user.isLoggedIn;
    })
  }

  ngOnDestroy() {
    if (this._loginSubscription) {
      this._loginSubscription.unsubscribe();
    }
  }

  /**
   * Logs in the user
   */
  public login(): void {
    this._loginService.login();
  }

  /**
   * Logs out the current user
   */
  public logout(): void {
    this._loginService.logout();
  }

}

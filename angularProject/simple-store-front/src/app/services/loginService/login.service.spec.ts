import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';
import { Subscription } from 'rxjs';
import { IUser } from 'src/app/interface/IUser';

describe('LoginService', () => {
  let service: LoginService;
  let loginSubscription: Subscription;
  beforeEach(() => TestBed.configureTestingModule({}));

  beforeEach(() => {
    service = TestBed.get(LoginService);
  });

  afterEach(() => {
    if (loginSubscription) {
      loginSubscription.unsubscribe();
    }
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should login the user', (done) => {

    loginSubscription = service.login().subscribe((user:IUser) => {
      expect(user.isLoggedIn).toBeTruthy();
      done();
    });
  });

  it("should logout the user", (done) => {
    loginSubscription = service.logout().subscribe((user:IUser) => {
      expect(user.isLoggedIn).toBeFalsy();
      done();
    });
  })
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { LoginService } from '../services/loginService/login.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let loginService: LoginService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [
        MatToolbarModule,
        MatDividerModule,
        MatMenuModule,
        BrowserAnimationsModule
      ],
      providers: [LoginService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    loginService = TestBed.get(LoginService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the login service', async(() => {
    const loginSpy = spyOn(loginService, 'login').and.stub();
    const button = fixture.debugElement.nativeElement.querySelector('#login');
    button.click();
    fixture.whenStable().then(() => {
      expect(loginSpy).toHaveBeenCalled();
    });
  }));

  it('should call logout', async(() => {
    const logoutSpy = spyOn(loginService, 'logout').and.stub();
    const subscription = loginService.login().subscribe(() => {
      fixture.detectChanges();
      const button = fixture.debugElement.nativeElement.querySelector('#logout');
      button.click();
      fixture.whenStable().then(() => {
        expect(logoutSpy).toHaveBeenCalled();
        subscription.unsubscribe();
      });
    })
  }));
});

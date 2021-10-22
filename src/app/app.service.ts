import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService, SocialUser } from 'angularx-social-login';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  loggedIn: boolean | any;
  constructor(private authService: SocialAuthService, private router: Router) { }
  getUser() {
    this.authService.authState.subscribe(async (user) => {
      if (user != null) {
        this.loggedIn = (user != null);
        localStorage.setItem('userData', JSON.stringify(user));
        localStorage.setItem('authToken', user.authToken);
        this.router.navigate(["/profile"]);
      }
    });
  }
}

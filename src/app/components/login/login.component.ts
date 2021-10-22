import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbAuthResult, NbAuthService } from '@nebular/auth';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: SocialUser | any;
  loggedIn: boolean | any;
  constructor(private authService: SocialAuthService, private service: AppService, private router: Router, private http: HttpClient) { }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.service.getUser();
  }

  refreshToken(): void {
    this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }

  ngOnInit(): void {
    let authToken = localStorage.getItem('authToken');
    if (authToken != null) {
      this.router.navigate(["/profile"]);
    }
  }
}


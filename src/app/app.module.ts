import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbButtonModule, NbCardModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { SocialLoginModule, GoogleLoginProvider } from 'angularx-social-login';
import { AuthGuard } from './auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { NbAuthModule, NbOAuth2AuthStrategy, NbOAuth2ResponseType } from '@nebular/auth';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbButtonModule,
    NbCardModule,
    SocialLoginModule,
    HttpClientModule,
    // NbAuthModule.forRoot({
    //   strategies: [
    //     NbOAuth2AuthStrategy.setup({
    //       name: 'google',
    //       clientId: '521420367246-cq776e8pm5j8nbpu41boldbs19ut41f3.apps.googleusercontent.com',
    //       clientSecret: '',
    //       authorize: {
    //         endpoint: 'https://accounts.google.com/o/oauth2/v2/auth',
    //         responseType: NbOAuth2ResponseType.TOKEN,
    //         scope: 'https://www.googleapis.com/auth/userinfo.profile',
    //         redirectUri: 'http://localhost:4200/'
    //       },
    //     }),
    //   ],
    // })
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('521420367246-cq776e8pm5j8nbpu41boldbs19ut41f3.apps.googleusercontent.com')
          }
        ]
      }
    },
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

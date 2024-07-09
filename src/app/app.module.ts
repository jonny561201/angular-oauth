import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginButtonComponent} from './components/login-button/login-button.component';
import {AuthModule} from '@auth0/auth0-angular';
import {environment} from '../environments/environment';
import {UserProfileComponent} from './components/user-profile/user-profile.component';
import {LogoutButtonComponent} from './components/logout-button/logout-button.component';

@NgModule({
  declarations: [
    AppComponent,
    // LoginButtonComponent,
    // LogoutButtonComponent,
    // UserProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot(environment.auth0),
    LoginButtonComponent,
    LogoutButtonComponent,
    UserProfileComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

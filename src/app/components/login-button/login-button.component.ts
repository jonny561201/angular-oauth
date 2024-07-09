import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  standalone: true
})
export class LoginButtonComponent {
  constructor(private auth: AuthService) {}

  login(){
    this.auth.loginWithRedirect();
  }
}

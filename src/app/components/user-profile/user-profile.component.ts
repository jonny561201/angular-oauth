import { Component } from '@angular/core';
import {AuthService} from '@auth0/auth0-angular';
import {AsyncPipe, CommonModule, NgOptimizedImage} from '@angular/common';

@Component({
  selector: ' app-user-profile',
  templateUrl: './user-profile.component.html',
  imports: [AsyncPipe, CommonModule, NgOptimizedImage],
  standalone: true
})
export class UserProfileComponent {
  constructor(public auth: AuthService) {}
}

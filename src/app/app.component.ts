import {Component, OnInit} from '@angular/core';
import {AuthService} from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  isAuthenticated = false;

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
        this.auth.isAuthenticated$.subscribe(x => this.isAuthenticated = x);
        console.log(window.location.origin)
    }
}

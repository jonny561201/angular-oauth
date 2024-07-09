import {Component, OnInit} from '@angular/core';
import {AuthService} from "@auth0/auth0-angular";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  isAuthenticated = false;

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe(x => this.isAuthenticated = x);
  }
}

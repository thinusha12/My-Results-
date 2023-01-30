import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {}

  public navigateAdminLogin = (): void => {
    this.router.navigate(['login']);
  };

  public navigateDashboard = (): void => {
    this.router.navigate(['']);
  };
}

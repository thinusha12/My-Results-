import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
})
export class AdminLoginComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}
  ngOnInit(): void {}

  public loginAdmin = (): void => {
    if (this.username === '') {
      alert('please enter the username');
      return;
    } else if (this.password === '') {
      alert('please enter the passowrd');
      return;
    } else {
      if (this.username === 'admin' && this.password === 'admin') {
        this.router.navigate(['admin']);
      } else {
        alert('Invalid Credentials');
        return;
      }
    }
  };
}

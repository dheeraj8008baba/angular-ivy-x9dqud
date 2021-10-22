import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router) {
    let token = localStorage.getItem('authToken');
    if (token == null) {
      this.router.navigate(["/login"]);
    }
  }
}
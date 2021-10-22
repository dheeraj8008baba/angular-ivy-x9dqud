import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: any = {};
  constructor(private router: Router) {

  }
  ngOnInit(): void {
    let userData: any = localStorage.getItem('userData');
    this.user = JSON.parse(userData);
  }

  signOut() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}


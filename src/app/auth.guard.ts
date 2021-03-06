import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate() {
    if (localStorage.getItem('authToken') != null) {
      return true;
    } else {
      return false;
    }
  }
}

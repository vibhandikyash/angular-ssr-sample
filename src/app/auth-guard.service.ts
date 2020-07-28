import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from './auth/auth.service';
import { Observable } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class AuthGuardService implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    let url = state.url;
    console.log('url', url);

    if (this.authService.isLogged()) {
      console.log('state', this.authService.isLogged());
      if (url === '/') this.router.navigate(['/home']);
      if (url === '/login') this.router.navigate(['/home']);
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}

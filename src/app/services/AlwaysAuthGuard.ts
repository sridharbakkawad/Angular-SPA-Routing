import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
// import {Router} from '@angular/core'

export class AlwaysAuthGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
        console.log('I am AlwaysAuthGuard' + state);

        // if (Session.isAuthenticated == true)
          // this._roter.navigate("contacts")
    return true;
  }
}

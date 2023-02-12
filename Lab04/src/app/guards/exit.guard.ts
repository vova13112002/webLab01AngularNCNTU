import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MainApiComponent } from '../main-api/main-api.component';

@Injectable({
  providedIn: 'root'
})
export class ExitGuard implements CanDeactivate<MainApiComponent> {
  canDeactivate(
    component: MainApiComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return confirm("На сторінці є не збережені зміни. Продовжити?");
  }


}

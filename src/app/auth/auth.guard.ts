import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { Router } from '@angular/router'
import { DataServicesService } from '../Services/data-services.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private _services: DataServicesService){}
 async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  Promise<boolean> {
      const isValid = await this._services.sendCheckToken();
      if(!isValid) this.router.navigate(['/login']);
      return isValid; 
  }
  
}

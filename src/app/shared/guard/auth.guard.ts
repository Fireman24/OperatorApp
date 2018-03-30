import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import {AuthService} from '../services/AuthService';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router,
                private auth: AuthService) {}

    canActivate() {
        if (this.auth.ReadLocalToken()) {
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }
}

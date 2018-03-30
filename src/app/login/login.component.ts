import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import {OperatorService} from '../shared/services/OperatorService';
import {AuthService} from '../shared/services/AuthService';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()],
    providers: [OperatorService]
})
export class LoginComponent implements OnInit {
    username: string;
    password: string;

    constructor(public router: Router,
                private _auth: AuthService) {}

    ngOnInit() {}

    onLoggedin() {
        this._auth.TryGetToken(this.username, this.password).subscribe(
            data => {
                if (data.token != null) {
                    this._auth.WriteLocalToken(data.token);
                    this.router.navigate(['/']);
                }
            },
            error2 => {
            }
        );
    }
}

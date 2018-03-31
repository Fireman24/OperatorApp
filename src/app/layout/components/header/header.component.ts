import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import {AuthService} from '../../../shared/services/AuthService';
import {Operator} from '../../../shared/models/Operator';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    pushRightClass = 'push-right';
    public operator: Operator = new Operator();

    constructor(private translate: TranslateService,
                private _auth: AuthService,
                public router: Router) {

        this.translate.addLangs(['en', 'ru', 'kz']);
        this.translate.setDefaultLang('ru');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|ru|kz/) ? browserLang : 'ru');

        this.router.events.subscribe(val => {
            if (
                val instanceof NavigationEnd &&
                window.innerWidth <= 992 &&
                this.isToggled()
            ) {
                this.toggleSidebar();
            }
        });
    }

    ngOnInit() {
        this._auth.CheckToken(this._auth.ReadLocalToken()).subscribe(data => {
            this.operator = data;
        });
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    onLoggedout() {
        this._auth.RemoveLocalToken();
    }

    changeLang(language: string) {
        this.translate.use(language);
    }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {FormsModule} from '@angular/forms';
import {PageHeaderModule} from '../../shared';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MomentModule} from 'angular2-moment';
import {FirecarInfoRoutingModule} from './firecar-info-routing.module';
import {FirecarInfoComponent} from './firecar-info.component';



@NgModule({
    imports: [CommonModule, FirecarInfoRoutingModule, PageHeaderModule, TranslateModule, NgbModule.forRoot(), FormsModule, MomentModule],
    declarations: [FirecarInfoComponent]
})
export class FirecarInfoModule {}

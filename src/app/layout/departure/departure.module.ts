import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DepartureComponent} from './departure.component';
import {DepartureRoutingModule} from './departure-routing.module';
import {TranslateModule} from '@ngx-translate/core';
import {FormsModule} from '@angular/forms';
import {PageHeaderModule} from '../../shared';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
    imports: [CommonModule, DepartureRoutingModule, PageHeaderModule, TranslateModule, NgbModule.forRoot(), FormsModule],
    declarations: [DepartureComponent]
})
export class DepartureModule {}

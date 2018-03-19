import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { PageHeaderModule } from '../../shared/';
import {FormsModule} from '@angular/forms';
import {MomentModule} from 'angular2-moment';
import {DepartureListRoutingModule} from './fire-list-routing.module';
import {AddDepartureModalComponent} from './add-fire-modal/add-fire-modal.component';
import {DepartureListComponent} from './fire-list.component';


@NgModule({
    imports: [CommonModule, DepartureListRoutingModule, PageHeaderModule, TranslateModule, NgbModule.forRoot(), FormsModule, MomentModule],
    declarations: [DepartureListComponent, AddDepartureModalComponent],
    entryComponents: [AddDepartureModalComponent]
})
export class DepartureListModule {}

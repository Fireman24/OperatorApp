import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { PageHeaderModule } from '../../shared/';
import {FormsModule} from '@angular/forms';
import {MomentModule} from 'angular2-moment';
import {AddFireModalComponent} from './add-fire-modal/add-fire-modal.component';
import {FireListComponent} from './fire-list.component';
import {FireListRoutingModule} from './fire-list-routing.module';


@NgModule({
    imports: [CommonModule, FireListRoutingModule, PageHeaderModule, TranslateModule, NgbModule.forRoot(), FormsModule, MomentModule],
    declarations: [FireListComponent, AddFireModalComponent],
    entryComponents: [AddFireModalComponent]
})
export class FireListModule {}

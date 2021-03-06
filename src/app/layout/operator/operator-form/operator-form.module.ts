import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { MapModule} from '../../../shared/modules/map-module/map.module';
import {OperatorFormComponent} from './operator-form.component';
import { FormsModule } from '@angular/forms';
import {OperatorService} from '../../../shared/services/OperatorService';

@NgModule({
    imports: [CommonModule, TranslateModule, NgbModule.forRoot(), MapModule, FormsModule],
    declarations: [ OperatorFormComponent],
    exports: [ OperatorFormComponent],
    entryComponents: [ OperatorFormComponent],
    providers: [ OperatorService]
})
export class OperatorFormModule {}

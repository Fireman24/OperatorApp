import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { OperatorRoutingModule } from './operator-routing.module';
import { OperatorComponent } from './operator.component';
import { PageHeaderModule } from '../../shared/';

import {OperatorFormModule} from './operator-form/operator-form.module';
import {MapModule} from '../../shared/modules/map-module/map.module';

@NgModule({
    imports: [CommonModule, OperatorRoutingModule, PageHeaderModule, TranslateModule, OperatorFormModule, MapModule],
    declarations: [OperatorComponent]
})
export class OperatorModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { PageHeaderModule } from '../../shared/';

import {MapModule} from '../../shared/modules/map-module/map.module';
import {HydrantComponent} from './hydrant.component';
import {HydrantRoutingModule} from './hydrant-routing.module';
import {HydrantFormModule} from './hydrant-form/hydrant-form.module';

@NgModule({
    imports: [CommonModule, HydrantRoutingModule, PageHeaderModule, TranslateModule, MapModule, HydrantFormModule],
    declarations: [HydrantComponent]
})
export class HydrantModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapPageRoutingModule} from './map-page-routing.module';
import { MapPageComponent } from './map-page.component';
import {MapModule} from '../../shared/modules/map-module/map.module';


@NgModule({
    imports: [CommonModule, MapPageRoutingModule, MapModule],
    declarations: [MapPageComponent]
})
export class MapPageModule {}

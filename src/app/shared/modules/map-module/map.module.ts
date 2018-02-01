import 'leaflet/dist/leaflet.css';
import 'leaflet';
import 'leaflet.vectorgrid';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MapComponent} from './map.component';
import {MapService} from './map.service';
import {GeocodingService} from './geocoding.service';
import {HttpClient} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule],
    providers: [MapService, GeocodingService, HttpClient],
    declarations: [ MapComponent],
    exports: [MapComponent],
    entryComponents: [ MapComponent ]
})
export class MapModule { }

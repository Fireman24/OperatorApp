import {Time} from '@angular/common';
import {GpsPoint} from '../modules/map-module/GpsPoint';

export class Hydrant {
    id = 0;
    revisionDate?: any;
    active = true;
    gpsPoint: GpsPoint = new GpsPoint();
    responsible: string;
    description: string;
}

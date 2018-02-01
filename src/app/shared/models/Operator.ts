

import {GpsPoint} from '../modules/map-module/GpsPoint';

export class Operator {
    id = 0;
    name: string;
    login: string;
    key: string;
    role: string;
    active = true;
    geoZone?: GpsPoint = new GpsPoint();
    fires?: any[];
}

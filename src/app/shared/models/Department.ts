import {GpsPoint} from '../modules/map-module/GpsPoint';

export class Department {
    id = 0;
    name: string;
    address: string;
    active = true;
    gpsPoint?: GpsPoint = new GpsPoint();
    fireCars?: any[];
}

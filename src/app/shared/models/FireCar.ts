import {GpsPoint} from '../modules/map-module/GpsPoint';
import {Department} from './Department';
import {Broadcast} from './Broadcast';

export class FireCar {
    id = 0;
    name: string;
    num: string;
    lastUpdateTime: string;
    specialization: string;
    active = true;
    gpsPoint: GpsPoint = new GpsPoint();
    department?: Department;
    broadcast?: Broadcast = new Broadcast();
    fire?: any;
}

import {Department} from './Department';
import {GpsPoint} from '../modules/map-module/GpsPoint';

export class Address {
    id = 0;
    label: string;
    place: string;
    category: string;
    gpsPoint: GpsPoint = new GpsPoint();
    rank: number;
    description: string;
    department?: Department;

    public toString = (): string => {
        return this.label;
    }
}

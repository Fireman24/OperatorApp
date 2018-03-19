import {GpsPoint} from '../modules/map-module/GpsPoint';
import {HistoryRecord} from './HistoryRecord';
import {FireCar} from './FireCar';
import {Image} from './Image';
import {Operator} from './Operator';
import {Department} from './Department';

export class Fire {
    public id = 0;
    public address: string;
    public rank: number;
    public gpsPoint: GpsPoint;
    public startDateTime: string;
    public finishDateTime?: string;
    public comments: string;
    public receiver: string;
    public active = true;
    public manager: string;
    public operator: Operator;
    public department: Department;
    public fireCars: FireCar[] = [];
    public history: HistoryRecord[] = [];
    public images: Image[] = [];
}

import {GpsPoint} from '../modules/map-module/GpsPoint';
import {Operator} from './Operator';
import {FireCar} from './FireCar';
import {Image} from './Image';
import {HistoryRecord} from './HistoryRecord';

export class Departure {
    id = 0;
    // TODO: Заменить на объект.
    address: string;
    dateTime: string;
    intent: string;
    receiver: string;
    active = true;
    manager: string;
    comments: string;
    // TODO: Когда будет объект-адрес - убрать.
    gpsPoint: GpsPoint = new GpsPoint();
    operator?: Operator;
    fireCars: FireCar[] = [];
    history: HistoryRecord[] = [];
    images: Image[] = [];
}

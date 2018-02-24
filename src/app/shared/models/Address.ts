import {Department} from './Department';

export class Address {
    id = 0;
    label: string;
    lat: number;
    lon: number;
    rank: number;
    department?: Department;

    public toString = (): string => {
        return this.label;
    }
}

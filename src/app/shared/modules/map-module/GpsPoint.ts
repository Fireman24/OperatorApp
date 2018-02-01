export class GpsPoint {
    id = 0;
    lat: number;
    lon: number;
    constructor(lt?: number, ln?: number) {
        if (lt != null && ln != null) {
            this.lat = lt;
            this.lon = ln;
        }
    }

}

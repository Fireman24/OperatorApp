import * as L from 'leaflet' ;

/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
    id: string;
}


declare module 'leaflet' {
    namespace vectorGrid {
        export function slicer(data: any, options?: any): any;
    }
}

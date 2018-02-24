/// <reference path="./leaflet.vectorgrid.d.ts"/>

import {Injectable} from '@angular/core';
import {Location} from './location.class';
import * as L from 'leaflet';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class MapService {
    public map: L.Map;
    public baseMaps: any;
    private vtLayer: any;

    constructor(private http: HttpClient) {
        this.baseMaps = {
            OpenStreetMap: L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                attribution: ''
            }),
            Esri: L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
                attribution: ''
            }),
            Mapnet: L.tileLayer('http://korona.geog.uni-heidelberg.de/tiles/roads/x={x}&y={y}&z={z}', {
                attribution: ''
            }),
            CartoDB: L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
                attribution: 'openstreetmap.org'
            })
        };
    }

    disableMouseEvent(elementId: string) {
        const element = <HTMLElement>document.getElementById(elementId);

        L.DomEvent.disableClickPropagation(element);
        L.DomEvent.disableScrollPropagation(element);
    }

    toggleAirPortLayer() {
      if (this.vtLayer) {
          this.map.removeLayer(this.vtLayer);
          delete this.vtLayer;
      } else {
          this.http.get('https://rawgit.com/haoliangyu/angular2-leaflet-starter/master/public/data/airports.geojson')
              .subscribe(result => {
                  this.vtLayer = L.vectorGrid.slicer(result);
                  this.vtLayer.addTo(this.map);
              });
      }
    }
}

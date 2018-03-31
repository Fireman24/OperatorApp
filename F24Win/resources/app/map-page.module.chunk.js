webpackJsonp(["map-page.module"],{

/***/ "../../../../../src/app/layout/map-page/map-page-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPageRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_page_component__ = __webpack_require__("../../../../../src/app/layout/map-page/map-page.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__map_page_component__["a" /* MapPageComponent */]
    }
];
var MapPageRoutingModule = (function () {
    function MapPageRoutingModule() {
    }
    MapPageRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], MapPageRoutingModule);
    return MapPageRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/map-page/map-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div  style=\"height: 600px; width: 100%;\">\r\n    <app-map #map style=\"height: 100%; width: 100%;\" ></app-map>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/map-page/map-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_DepartmentService__ = __webpack_require__("../../../../../src/app/shared/services/DepartmentService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_HydrantService__ = __webpack_require__("../../../../../src/app/shared/services/HydrantService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_DepartureService__ = __webpack_require__("../../../../../src/app/shared/services/DepartureService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_modules_map_module_map_component__ = __webpack_require__("../../../../../src/app/shared/modules/map-module/map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_FireService__ = __webpack_require__("../../../../../src/app/shared/services/FireService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_FireCarService__ = __webpack_require__("../../../../../src/app/shared/services/FireCarService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_services_AuthService__ = __webpack_require__("../../../../../src/app/shared/services/AuthService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MapPageComponent = (function () {
    function MapPageComponent(_departureService, _departmentService, _fireService, _firecarService, _auth, _hydrantService) {
        this._departureService = _departureService;
        this._departmentService = _departmentService;
        this._fireService = _fireService;
        this._firecarService = _firecarService;
        this._auth = _auth;
        this._hydrantService = _hydrantService;
        this._departments = [];
        this._departures = [];
        this._firecars = [];
        this._fires = [];
        this._hydrants = [];
    }
    MapPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.DrawMarkers();
        this._auth.CheckToken(this._auth.ReadLocalToken()).subscribe(function (data) {
            _this._map.SetViewCenter(data.geoZone);
        });
    };
    MapPageComponent.prototype.DrawMarkers = function () {
        var _this = this;
        this._departureService.getDepartures().subscribe(function (data) {
            for (var _i = 0, _a = _this._departures; _i < _a.length; _i++) {
                var d = _a[_i];
                _this._map.RemoveMarker(d);
            }
            _this._departures = [];
            for (var _b = 0, data_1 = data; _b < data_1.length; _b++) {
                var d = data_1[_b];
                var marker = _this._map.AddIcon(d.gpsPoint, 'assets/images/departureMapIcon.png');
                marker.bindPopup("<p>" + d.address + "</p><p>" + d.intent + "</p><p>" + d.comments + "</p>");
                _this._departures.push(marker);
            }
        });
        this._firecarService.getFireCars().subscribe(function (data) {
            for (var _i = 0, _a = _this._firecars; _i < _a.length; _i++) {
                var d = _a[_i];
                _this._map.RemoveMarker(d);
            }
            _this._firecars = [];
            for (var _b = 0, data_2 = data; _b < data_2.length; _b++) {
                var d = data_2[_b];
                var marker = _this._map.AddIcon(d.gpsPoint, 'assets/images/firecarMapIcon.png');
                marker.bindPopup("<p>" + d.name + "</p><p>" + d.specialization + "</p><p>" + d.num + "</p>");
                _this._firecars.push(marker);
            }
        });
        this._fireService.getFires().subscribe(function (data) {
            for (var _i = 0, _a = _this._fires; _i < _a.length; _i++) {
                var d = _a[_i];
                _this._map.RemoveMarker(d);
            }
            _this._fires = [];
            for (var _b = 0, data_3 = data; _b < data_3.length; _b++) {
                var d = data_3[_b];
                var marker = _this._map.AddIcon(d.gpsPoint, 'assets/images/fireMapIcon.png');
                marker.bindPopup("<p>" + d.address + "</p><p>" + d.department.name + "</p><p>" + d.comments
                    + "</p><p>R:" + d.rank + "</p>");
                _this._fires.push(marker);
            }
        });
        this._departmentService.getDepartments().subscribe(function (data) {
            for (var _i = 0, _a = _this._departments; _i < _a.length; _i++) {
                var d = _a[_i];
                _this._map.RemoveMarker(d);
            }
            _this._departments = [];
            for (var _b = 0, data_4 = data; _b < data_4.length; _b++) {
                var d = data_4[_b];
                var marker = _this._map.AddIcon(d.gpsPoint, 'assets/images/departmentMapIcon.png');
                marker.bindPopup("<p>" + d.name + "</p><p>" + d.address + "</p>");
                _this._departments.push(marker);
            }
        });
        this._hydrantService.getHydrants().subscribe(function (data) {
            for (var _i = 0, _a = _this._hydrants; _i < _a.length; _i++) {
                var d = _a[_i];
                _this._map.RemoveMarker(d);
            }
            _this._hydrants = [];
            for (var _b = 0, data_5 = data; _b < data_5.length; _b++) {
                var d = data_5[_b];
                var active = 'assets/images/hydrantMapActive.png';
                var inactive = 'assets/images/hydrantMapInactive.png';
                var marker = _this._map.AddIcon(d.gpsPoint, d.active ? active : inactive);
                marker.bindPopup("<p>" + d.waterType + "</p><p>" + d.description + "</p><p>" + d.responsible
                    + "</p><p>" + d.revisionDate + "</p>");
                _this._hydrants.push(marker);
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__shared_modules_map_module_map_component__["a" /* MapComponent */])
    ], MapPageComponent.prototype, "_map", void 0);
    MapPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-map-page',
            template: __webpack_require__("../../../../../src/app/layout/map-page/map-page.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_3__shared_services_DepartureService__["a" /* DepartureService */], __WEBPACK_IMPORTED_MODULE_1__shared_services_DepartmentService__["a" /* DepartmentService */], __WEBPACK_IMPORTED_MODULE_2__shared_services_HydrantService__["a" /* HydrantService */], __WEBPACK_IMPORTED_MODULE_5__shared_services_FireService__["a" /* FireService */], __WEBPACK_IMPORTED_MODULE_6__shared_services_FireCarService__["a" /* FireCarService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_services_DepartureService__["a" /* DepartureService */],
            __WEBPACK_IMPORTED_MODULE_1__shared_services_DepartmentService__["a" /* DepartmentService */],
            __WEBPACK_IMPORTED_MODULE_5__shared_services_FireService__["a" /* FireService */],
            __WEBPACK_IMPORTED_MODULE_6__shared_services_FireCarService__["a" /* FireCarService */],
            __WEBPACK_IMPORTED_MODULE_7__shared_services_AuthService__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_HydrantService__["a" /* HydrantService */]])
    ], MapPageComponent);
    return MapPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/map-page/map-page.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPageModule", function() { return MapPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_page_routing_module__ = __webpack_require__("../../../../../src/app/layout/map-page/map-page-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map_page_component__ = __webpack_require__("../../../../../src/app/layout/map-page/map-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_modules_map_module_map_module__ = __webpack_require__("../../../../../src/app/shared/modules/map-module/map.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var MapPageModule = (function () {
    function MapPageModule() {
    }
    MapPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__map_page_routing_module__["a" /* MapPageRoutingModule */], __WEBPACK_IMPORTED_MODULE_4__shared_modules_map_module_map_module__["a" /* MapModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__map_page_component__["a" /* MapPageComponent */]]
        })
    ], MapPageModule);
    return MapPageModule;
}());



/***/ })

});
//# sourceMappingURL=map-page.module.chunk.js.map
webpackJsonp(["firecar-info.module"],{

/***/ "../../../../../src/app/layout/firecar-info/firecar-info-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirecarInfoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__firecar_info_component__ = __webpack_require__("../../../../../src/app/layout/firecar-info/firecar-info.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__firecar_info_component__["a" /* FirecarInfoComponent */]
    }
];
var FirecarInfoRoutingModule = (function () {
    function FirecarInfoRoutingModule() {
    }
    FirecarInfoRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], FirecarInfoRoutingModule);
    return FirecarInfoRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/firecar-info/firecar-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"row\">\r\n        <div class=\"col-xl-6 text-xl-left\">\r\n            <h3>{{_firecar.name}}</h3>\r\n        </div>\r\n        <div class=\"col-xl-6 text-xl-right\">\r\n            <button type=\"button\" class=\"btn btn-link\" (click)=\"ReloadData();\">\r\n                <i *ngIf=\"!_loading\" style=\"color: grey;\" class=\"fa fa-refresh fa-2x\"></i>\r\n                <i *ngIf=\"_loading\" style=\"color: grey;\" class=\"fa fa-spin fa-refresh fa-2x\"></i>\r\n            </button>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-body table-responsive\">\r\n        <br>\r\n        <div *ngIf=\"_firecar.broadcast!=null && _firecar.broadcast.url!==''\" class=\"row\">\r\n            <div class=\"col\">\r\n                <p><button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"broadcastVisible = !broadcastVisible\"\r\n                        [attr.aria-expanded]=\"!broadcastVisible\" aria-controls=\"broadcast\">\r\n                    {{'Broadcast' | translate }}\r\n                </button>\r\n                </p>\r\n                <div id=\"broadcast\" [ngbCollapse]=\"broadcastVisible\">\r\n                    <div class=\"card\">\r\n                        <div class=\"card-body\" >\r\n                            <iframe scrolling=\"no\" [src]=\"videoUrl\" allowfullscreen=\"\" width=\"640px\" height=\"360px\" frameborder=\"0\"></iframe>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <br>\r\n        <div class=\"row\">\r\n            <div class=\"col\">\r\n                <p><button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"mapVisible = !mapVisible\"\r\n                        [attr.aria-expanded]=\"!mapVisible\" aria-controls=\"map\">\r\n                    {{'Map' | translate }}\r\n                </button>\r\n                </p>\r\n                <br>\r\n                <div id=\"map\" [ngbCollapse]=\"mapVisible\">\r\n                    <div class=\"card\">\r\n                        <div class=\"card-body\">\r\n                            <div  style=\"height: 600px; width: 100%;\">\r\n                                <app-map #map style=\"height: 100%; width: 100%;\" ></app-map>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <br>\r\n        <div class=\"row\">\r\n            <div class=\"col\">\r\n                <p class=\"h6\">{{'Specialization' | translate}}</p>\r\n                <p><mark>{{_firecar.specialization}}</mark></p>\r\n            </div>\r\n            <div *ngIf=\"_firecar.department != null\" class=\"col\">\r\n                <p class=\"h6\">{{'Department' | translate}}</p>\r\n                <p><mark>{{_firecar.department.name}}</mark></p>\r\n                <p><mark>{{_firecar.department.address}}</mark></p>\r\n            </div>\r\n            <div class=\"col\">\r\n                <p class=\"h6\">{{'Number' | translate}}</p>\r\n                <p><mark>{{_firecar.num}}</mark></p>\r\n            </div>\r\n            <div class=\"col\">\r\n                <p class=\"h6\">{{'Last update ' | translate}}</p>\r\n                <p><mark>{{_firecar.lastUpdateTime  |amLocale:'ru'| amFromUtc | amLocal |  amTimeAgo  }}</mark></p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/firecar-info/firecar-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirecarInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_DepartureService__ = __webpack_require__("../../../../../src/app/shared/services/DepartureService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_models_FireCar__ = __webpack_require__("../../../../../src/app/shared/models/FireCar.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_Backend__ = __webpack_require__("../../../../../src/app/shared/services/Backend.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_services_FireCarService__ = __webpack_require__("../../../../../src/app/shared/services/FireCarService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_modules_map_module_map_component__ = __webpack_require__("../../../../../src/app/shared/modules/map-module/map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_services_HydrantService__ = __webpack_require__("../../../../../src/app/shared/services/HydrantService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_services_FireService__ = __webpack_require__("../../../../../src/app/shared/services/FireService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_services_DepartmentService__ = __webpack_require__("../../../../../src/app/shared/services/DepartmentService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var FirecarInfoComponent = (function () {
    function FirecarInfoComponent(_activateRoute, _router, _firecarService, _http, _modalService, _departureService, _departmentService, _fireService, _hydrantService, _sanitizer) {
        var _this = this;
        this._activateRoute = _activateRoute;
        this._router = _router;
        this._firecarService = _firecarService;
        this._http = _http;
        this._modalService = _modalService;
        this._departureService = _departureService;
        this._departmentService = _departmentService;
        this._fireService = _fireService;
        this._hydrantService = _hydrantService;
        this._sanitizer = _sanitizer;
        this._firecar = new __WEBPACK_IMPORTED_MODULE_4__shared_models_FireCar__["a" /* FireCar */]();
        this._departments = [];
        this._departures = [];
        this._fires = [];
        this._hydrants = [];
        this.subscription = _activateRoute.params.subscribe(function (params) { return _this.id = params['id']; });
    }
    FirecarInfoComponent.prototype.ngOnInit = function () {
        this.ReloadData();
        this.DrawMarkers();
    };
    FirecarInfoComponent.prototype.ReloadData = function () {
        var _this = this;
        this._loading = true;
        this._firecarService.getFireCarById(this.id).subscribe(function (data) {
            _this._firecar = data;
            if (_this._firecarMarker != null) {
                _this._map.RemoveMarker(_this._firecarMarker);
            }
            if (_this._firecar.gpsPoint != null && _this._firecar.gpsPoint.lon !== 0) {
                _this._firecarMarker = _this._map.AddIcon(_this._firecar.gpsPoint, 'assets/images/firecarMapIcon.png');
            }
            if (_this._firecar.broadcast != null && _this._firecar.broadcast.url.length > 0) {
                _this.videoUrl = _this._sanitizer.bypassSecurityTrustResourceUrl(_this._firecar.broadcast.url);
            }
            _this._loading = false;
        });
    };
    FirecarInfoComponent.prototype.DrawMarkers = function () {
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
        this._fireService.getFires().subscribe(function (data) {
            for (var _i = 0, _a = _this._fires; _i < _a.length; _i++) {
                var d = _a[_i];
                _this._map.RemoveMarker(d);
            }
            _this._fires = [];
            for (var _b = 0, data_2 = data; _b < data_2.length; _b++) {
                var d = data_2[_b];
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
            for (var _b = 0, data_3 = data; _b < data_3.length; _b++) {
                var d = data_3[_b];
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
            for (var _b = 0, data_4 = data; _b < data_4.length; _b++) {
                var d = data_4[_b];
                var active = 'assets/images/hydrantMapActive.png';
                var inactive = 'assets/images/hydrantMapInactive.png';
                var marker = _this._map.AddIcon(d.gpsPoint, d.active ? active : inactive);
                marker.bindPopup("<p>" + d.waterType + "</p><p>" + d.description + "</p><p>" + d.responsible
                    + "</p><p>" + d.revisionDate + "</p>");
                _this._hydrants.push(marker);
            }
        });
    };
    FirecarInfoComponent.prototype.OpenDocumentButtonClick = function (doc) {
        var docUrl = __WEBPACK_IMPORTED_MODULE_6__shared_services_Backend__["a" /* Backend */].HOST_URL + doc.url;
        window.open(docUrl);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_8__shared_modules_map_module_map_component__["a" /* MapComponent */])
    ], FirecarInfoComponent.prototype, "_map", void 0);
    FirecarInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-firecar-info',
            template: __webpack_require__("../../../../../src/app/layout/firecar-info/firecar-info.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_7__shared_services_FireCarService__["a" /* FireCarService */], __WEBPACK_IMPORTED_MODULE_2__shared_services_DepartureService__["a" /* DepartureService */], __WEBPACK_IMPORTED_MODULE_11__shared_services_DepartmentService__["a" /* DepartmentService */], __WEBPACK_IMPORTED_MODULE_9__shared_services_HydrantService__["a" /* HydrantService */], __WEBPACK_IMPORTED_MODULE_10__shared_services_FireService__["a" /* FireService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_7__shared_services_FireCarService__["a" /* FireCarService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["g" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_DepartureService__["a" /* DepartureService */],
            __WEBPACK_IMPORTED_MODULE_11__shared_services_DepartmentService__["a" /* DepartmentService */],
            __WEBPACK_IMPORTED_MODULE_10__shared_services_FireService__["a" /* FireService */],
            __WEBPACK_IMPORTED_MODULE_9__shared_services_HydrantService__["a" /* HydrantService */],
            __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__["c" /* DomSanitizer */]])
    ], FirecarInfoComponent);
    return FirecarInfoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/firecar-info/firecar-info.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirecarInfoModule", function() { return FirecarInfoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_moment__ = __webpack_require__("../../../../angular2-moment/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__firecar_info_routing_module__ = __webpack_require__("../../../../../src/app/layout/firecar-info/firecar-info-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__firecar_info_component__ = __webpack_require__("../../../../../src/app/layout/firecar-info/firecar-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_modules_map_module_map_module__ = __webpack_require__("../../../../../src/app/shared/modules/map-module/map.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var FirecarInfoModule = (function () {
    function FirecarInfoModule() {
    }
    FirecarInfoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_7__firecar_info_routing_module__["a" /* FirecarInfoRoutingModule */], __WEBPACK_IMPORTED_MODULE_9__shared_modules_map_module_map_module__["a" /* MapModule */], __WEBPACK_IMPORTED_MODULE_4__shared__["a" /* PageHeaderModule */],
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */], __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["h" /* NgbModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_6_angular2_moment__["MomentModule"]],
            declarations: [__WEBPACK_IMPORTED_MODULE_8__firecar_info_component__["a" /* FirecarInfoComponent */]]
        })
    ], FirecarInfoModule);
    return FirecarInfoModule;
}());



/***/ })

});
//# sourceMappingURL=firecar-info.module.chunk.js.map
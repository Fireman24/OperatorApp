webpackJsonp(["hydrant.module"],{

/***/ "../../../../../src/app/layout/hydrant/hydrant-form/hydrant-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">{{ 'Hydrant' | translate }}</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"CloseModal();\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n    <div class=\"row\">\r\n        <div class=\"col-xl-6 text-xs-left\">\r\n            <div class=\"form-group\">\r\n                <label for=\"description\">{{ 'Description' | translate }}</label>\r\n                <input class=\"form-control\" id=\"description\" type=\"text\" [(ngModel)]=\"Hydrant.description\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                    <div class=\"input-group\">\r\n                        <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" #dateModel=\"ngModel\"\r\n                               name=\"datePicker\" [(ngModel)]=\"revisionDateModel\" ngbDatepicker #datePicker=\"ngbDatepicker\">\r\n                        <div class=\"input-group-append\">\r\n                            <button class=\"btn btn-outline-secondary\" (click)=\"datePicker.toggle()\" type=\"button\">\r\n                                <i class=\"fa fa-calendar\"></i>\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-6 text-xs-left\">\r\n            <div class=\"form-group\">\r\n                <label for=\"responsible\">{{ 'Responsible' | translate }}</label>\r\n                <input class=\"form-control\" id=\"responsible\" type=\"text\" [(ngModel)]=\"Hydrant.responsible\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"water\">{{ 'Water Type' | translate }}</label>\r\n                <input class=\"form-control\" id=\"water\" type=\"text\" [(ngModel)]=\"Hydrant.waterType\">\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-xl-6 text-xs-left\">\r\n                    <div class=\"form-group\">\r\n                        <div class=\"checkbox\">\r\n                            <label>\r\n                                <input id=\"active\" type=\"checkbox\" checked [(ngModel)]=\"Hydrant.active\" > {{'Active' | translate }}\r\n                            </label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-xl-6 text-xs-right\">\r\n                    <div class=\"form-group\">\r\n                        <button type=\"button\" #putMarkerButton class=\"btn btn-sm btn-secondary\" (click)=\"PutViewMarker();\">\r\n                            {{'Add marker' | translate}}</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n    </div>\r\n    <div class=\"row\" style=\"height: 250px; width: 100%;\">\r\n        <div class=\"col-xl-12 text-xs-center\">\r\n            <app-map #map style=\"height: 100%; width: 100%;\" ></app-map>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"CloseModal();\">{{ 'Cancel' | translate }}</button>\r\n    <button type=\"button\" class=\"btn btn-success\" (click)=\"SaveButtonClick();\">{{ 'Save' | translate }}</button>\r\n    <button *ngIf=\"EditMode\" type=\"button\" class=\"btn btn-danger\" (click)=\"DeleteButtonClick();\">{{ 'Remove' | translate }}</button>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/hydrant/hydrant-form/hydrant-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HydrantFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_modules_map_module_map_component__ = __webpack_require__("../../../../../src/app/shared/modules/map-module/map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_modules_map_module_GpsPoint__ = __webpack_require__("../../../../../src/app/shared/modules/map-module/GpsPoint.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_HydrantService__ = __webpack_require__("../../../../../src/app/shared/services/HydrantService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_models_Hydrant__ = __webpack_require__("../../../../../src/app/shared/models/Hydrant.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_providers_StringDateProvider__ = __webpack_require__("../../../../../src/app/shared/providers/StringDateProvider.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HydrantFormComponent = (function () {
    function HydrantFormComponent(modalService, hydrantService) {
        this.modalService = modalService;
        this.hydrantService = hydrantService;
        this._hydrant = new __WEBPACK_IMPORTED_MODULE_5__shared_models_Hydrant__["a" /* Hydrant */]();
        this._editMode = false;
        this.OnClose = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.AfterViewInit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.OnInit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    Object.defineProperty(HydrantFormComponent.prototype, "EditMode", {
        get: function () {
            return this._editMode;
        },
        enumerable: true,
        configurable: true
    });
    HydrantFormComponent.prototype.ngAfterViewInit = function () {
        this.AfterViewInit.next(null);
    };
    HydrantFormComponent.prototype.ngOnInit = function () {
        this.OnInit.next(null);
    };
    Object.defineProperty(HydrantFormComponent.prototype, "Hydrant", {
        get: function () {
            return this._hydrant;
        },
        set: function (value) {
            var _this = this;
            if (value == null) {
                return;
            }
            this._hydrant = value;
            // Если карта готова - рисует, если нет, то подписываемся на карту.
            if (this.map.MapReady) {
                this.DrawHydrantMarker();
            }
            else {
                this.map.OnReady.subscribe(function (e) {
                    _this.DrawHydrantMarker();
                });
            }
            this.OnInit.subscribe(function (e) {
                _this.revisionDateModel = new Date(_this._hydrant.revisionDate);
            }, function (e) { }, function (e) { });
        },
        enumerable: true,
        configurable: true
    });
    HydrantFormComponent.prototype.DrawHydrantMarker = function () {
        this.map.RemoveAllMarkers();
        if (this._hydrant.gpsPoint != null) {
            var geo = new __WEBPACK_IMPORTED_MODULE_3__shared_modules_map_module_GpsPoint__["a" /* GpsPoint */](this._hydrant.gpsPoint.lat, this._hydrant.gpsPoint.lon);
            this.map.AddMarker(geo);
            this.map.map.panTo([this._hydrant.gpsPoint.lat, this._hydrant.gpsPoint.lon]);
        }
    };
    HydrantFormComponent.prototype.SaveButtonClick = function () {
        var _this = this;
        this._hydrant.revisionDate = this.revisionDateModel.toISOString();
        if (this.map.markers.length > 0) {
            var m = this.map.markers[0].getLatLng();
            this._hydrant.gpsPoint = new __WEBPACK_IMPORTED_MODULE_3__shared_modules_map_module_GpsPoint__["a" /* GpsPoint */]();
            this._hydrant.gpsPoint.lon = m.lng;
            this._hydrant.gpsPoint.lat = m.lat;
        }
        if (this._editMode) {
            this.hydrantService.updateHydrant(this.Hydrant).subscribe(function (data) {
                _this.Hydrant = data;
                _this.CloseModal();
            }, function (error) { return console.log(error); });
        }
        else {
            this.hydrantService.addHydrant(this.Hydrant).subscribe(function (data) {
                _this.Hydrant = data;
                _this.CloseModal();
            }, function (error) { return console.log(error); });
        }
    };
    HydrantFormComponent.prototype.EditHydrant = function (hydrant) {
        this._editMode = true;
        this.Hydrant = hydrant;
    };
    HydrantFormComponent.prototype.PutViewMarker = function () {
        var center = this.map.GetCenterLtLn();
        this.map.RemoveAllMarkers();
        this.map.AddMarker(center);
    };
    HydrantFormComponent.prototype.CloseModal = function () {
        this.modalService.close();
        this.OnClose.next(null);
    };
    HydrantFormComponent.prototype.DeleteButtonClick = function () {
        var _this = this;
        this.hydrantService.deleteHydrant(this._hydrant.id).subscribe(function (data) {
            _this.CloseModal();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('content'),
        __metadata("design:type", Object)
    ], HydrantFormComponent.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__shared_modules_map_module_map_component__["a" /* MapComponent */])
    ], HydrantFormComponent.prototype, "map", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], HydrantFormComponent.prototype, "OnClose", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], HydrantFormComponent.prototype, "AfterViewInit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], HydrantFormComponent.prototype, "OnInit", void 0);
    HydrantFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-hydrant-form',
            template: __webpack_require__("../../../../../src/app/layout/hydrant/hydrant-form/hydrant-form.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_4__shared_services_HydrantService__["a" /* HydrantService */], __WEBPACK_IMPORTED_MODULE_6__shared_providers_StringDateProvider__["a" /* StringDateProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */], __WEBPACK_IMPORTED_MODULE_4__shared_services_HydrantService__["a" /* HydrantService */]])
    ], HydrantFormComponent);
    return HydrantFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/hydrant/hydrant-form/hydrant-form.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HydrantFormModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_modules_map_module_map_module__ = __webpack_require__("../../../../../src/app/shared/modules/map-module/map.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__hydrant_form_component__ = __webpack_require__("../../../../../src/app/layout/hydrant/hydrant-form/hydrant-form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var HydrantFormModule = (function () {
    function HydrantFormModule() {
    }
    HydrantFormModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */], __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["h" /* NgbModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_4__shared_modules_map_module_map_module__["a" /* MapModule */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormsModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_6__hydrant_form_component__["a" /* HydrantFormComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_6__hydrant_form_component__["a" /* HydrantFormComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_6__hydrant_form_component__["a" /* HydrantFormComponent */]]
        })
    ], HydrantFormModule);
    return HydrantFormModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/hydrant/hydrant-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HydrantRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hydrant_component__ = __webpack_require__("../../../../../src/app/layout/hydrant/hydrant.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__hydrant_component__["a" /* HydrantComponent */]
    }
];
var HydrantRoutingModule = (function () {
    function HydrantRoutingModule() {
    }
    HydrantRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], HydrantRoutingModule);
    return HydrantRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/hydrant/hydrant.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <app-page-header [heading]=\"'Hydrants'  | translate\" [icon]=\"'fa-adjust'\">\r\n        <button type=\"button\" class=\"btn btn-link\" (click)=\"RefreshList();\">\r\n            <i *ngIf=\"!loading\" style=\"color: grey;\" class=\"fa fa-refresh fa-2x\"></i>\r\n            <i *ngIf=\"loading\" style=\"color: grey;\" class=\"fa fa-spin fa-refresh fa-2x\"></i>\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"AddButtonClick();\">{{ 'Add' | translate }}</button>\r\n    </app-page-header>\r\n    <div class=\"card-body table-responsive\">\r\n        <table class=\"table\">\r\n            <thead>\r\n            <tr>\r\n                <th>{{ 'Active' | translate }}</th>\r\n                <th>{{ 'Revision date' | translate }}</th>\r\n                <th>{{ 'Responsible' | translate }}</th>\r\n                <th></th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr *ngFor=\"let hyd of hydrantList\">\r\n                <td>\r\n                    <i *ngIf=\"hyd.active\" style=\"color: darkblue;\" class=\"fa fa-adjust\"></i>\r\n                    <i *ngIf=\"!hyd.active\" style=\"color: darkred;\" class=\"fa fa-adjust\"></i>\r\n                </td>\r\n                <td>{{hyd.revisionDate | date}}</td>\r\n                <td>{{hyd.responsible}}</td>\r\n                <td>\r\n                    <button type=\"button\" class=\"btn btn-info\" (click)=\"EditButtonClick(hyd);\">{{ 'Edit' | translate }}</button>\r\n                </td>\r\n            </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/hydrant/hydrant.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HydrantComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_HydrantService__ = __webpack_require__("../../../../../src/app/shared/services/HydrantService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hydrant_form_hydrant_form_component__ = __webpack_require__("../../../../../src/app/layout/hydrant/hydrant-form/hydrant-form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HydrantComponent = (function () {
    function HydrantComponent(hydrantService, modalService) {
        this.hydrantService = hydrantService;
        this.modalService = modalService;
        this.loading = false;
        this.hydrantList = [];
    }
    HydrantComponent.prototype.ngOnInit = function () {
        this.RefreshList();
    };
    HydrantComponent.prototype.RefreshList = function () {
        var _this = this;
        this.loading = true;
        this.hydrantService.getHydrants().subscribe(function (data) {
            _this.hydrantList = data;
            _this.loading = false;
        });
    };
    HydrantComponent.prototype.AddButtonClick = function () {
        var _this = this;
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_3__hydrant_form_hydrant_form_component__["a" /* HydrantFormComponent */]);
        var form = modalRef.componentInstance;
        form.OnClose.subscribe(function (e) {
            _this.RefreshList();
        });
    };
    HydrantComponent.prototype.EditButtonClick = function (hyd) {
        var _this = this;
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_3__hydrant_form_hydrant_form_component__["a" /* HydrantFormComponent */]);
        var form = modalRef.componentInstance;
        form.OnClose.subscribe(function (e) {
            _this.RefreshList();
        });
        form.EditHydrant(hyd);
    };
    HydrantComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-hydrant',
            template: __webpack_require__("../../../../../src/app/layout/hydrant/hydrant.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__shared_services_HydrantService__["a" /* HydrantService */], __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["g" /* NgbModal */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_HydrantService__["a" /* HydrantService */], __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["g" /* NgbModal */]])
    ], HydrantComponent);
    return HydrantComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/hydrant/hydrant.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HydrantModule", function() { return HydrantModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared___ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_modules_map_module_map_module__ = __webpack_require__("../../../../../src/app/shared/modules/map-module/map.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__hydrant_component__ = __webpack_require__("../../../../../src/app/layout/hydrant/hydrant.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__hydrant_routing_module__ = __webpack_require__("../../../../../src/app/layout/hydrant/hydrant-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__hydrant_form_hydrant_form_module__ = __webpack_require__("../../../../../src/app/layout/hydrant/hydrant-form/hydrant-form.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var HydrantModule = (function () {
    function HydrantModule() {
    }
    HydrantModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_6__hydrant_routing_module__["a" /* HydrantRoutingModule */], __WEBPACK_IMPORTED_MODULE_3__shared___["a" /* PageHeaderModule */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */], __WEBPACK_IMPORTED_MODULE_4__shared_modules_map_module_map_module__["a" /* MapModule */], __WEBPACK_IMPORTED_MODULE_7__hydrant_form_hydrant_form_module__["a" /* HydrantFormModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__hydrant_component__["a" /* HydrantComponent */]]
        })
    ], HydrantModule);
    return HydrantModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/models/Hydrant.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Hydrant; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_map_module_GpsPoint__ = __webpack_require__("../../../../../src/app/shared/modules/map-module/GpsPoint.ts");

var Hydrant = (function () {
    function Hydrant() {
        this.id = 0;
        this.active = true;
        this.gpsPoint = new __WEBPACK_IMPORTED_MODULE_0__modules_map_module_GpsPoint__["a" /* GpsPoint */]();
    }
    return Hydrant;
}());



/***/ })

});
//# sourceMappingURL=hydrant.module.chunk.js.map
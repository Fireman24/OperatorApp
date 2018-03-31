webpackJsonp(["address.module"],{

/***/ "../../../../../src/app/layout/address/address-form/address-form.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-template #departmentTemplate let-r=\"result\" let-t=\"term\">\r\n    {{ r.name}}\r\n</ng-template>\r\n\r\n<div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">{{ 'Address' | translate }}</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"CloseModal();\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n    <div class=\"row\">\r\n        <div class=\"col-xl-6 text-xs-left\">\r\n            <div class=\"form-group\">\r\n                <label for=\"label\">{{ 'Label' | translate }}</label>\r\n                <input class=\"form-control\" id=\"label\" type=\"text\" [(ngModel)]=\"Address.label\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label>{{ 'Rank' | translate }}</label>\r\n                <ngb-pagination [collectionSize]=\"30\" [(page)]=\"Address.rank\" [directionLinks]=\"false\"></ngb-pagination>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"place\">{{ 'Place' | translate }}</label>\r\n                <input class=\"form-control\" id=\"place\" type=\"text\" [(ngModel)]=\"Address.place\">\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-6 text-xs-right\">\r\n            <div class=\"form-group\">\r\n                <label for=\"departmentBox\">{{'Department' | translate }}</label>\r\n                <input id=\"departmentBox\" type=\"text\" class=\"form-control\" [(ngModel)]=\"Address.department\"\r\n                       [ngbTypeahead]=\"search\"\r\n                       [resultTemplate]=\"departmentTemplate\"\r\n                       [inputFormatter]=\"departmentFormatter\"/>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"cat\">{{'Category' | translate }}</label>\r\n                <input id=\"cat\" type=\"text\" class=\"form-control\" [(ngModel)]=\"Address.category\"/>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"desc\">{{'Description' | translate }}</label>\r\n                <input id=\"desc\" type=\"text\" class=\"form-control\" [(ngModel)]=\"Address.description\"/>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <br>\r\n                <button type=\"button\" class=\"btn btn-sm btn-secondary\" (click)=\"PutViewMarker();\">{{ 'Add marker' | translate }}</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" style=\"height: 250px; width: 100%;\">\r\n        <div class=\"col-xl-12 text-xs-center\">\r\n            <app-map #map style=\"height: 100%; width: 100%;\"></app-map>\r\n        </div>\r\n    </div>\r\n</div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"CloseModal();\">{{ 'Cancel' | translate }}</button>\r\n        <button type=\"button\" class=\"btn btn-success\" (click)=\"SaveButtonClick();\">{{ 'Save' | translate }}</button>\r\n    </div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/address/address-form/address-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_modules_map_module_map_component__ = __webpack_require__("../../../../../src/app/shared/modules/map-module/map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_modules_map_module_GpsPoint__ = __webpack_require__("../../../../../src/app/shared/modules/map-module/GpsPoint.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_AddressService__ = __webpack_require__("../../../../../src/app/shared/services/AddressService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_models_Address__ = __webpack_require__("../../../../../src/app/shared/models/Address.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_DepartmentService__ = __webpack_require__("../../../../../src/app/shared/services/DepartmentService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddressFormComponent = (function () {
    function AddressFormComponent(modalService, addressService, departmentService) {
        var _this = this;
        this.modalService = modalService;
        this.addressService = addressService;
        this.departmentService = departmentService;
        this._address = new __WEBPACK_IMPORTED_MODULE_5__shared_models_Address__["a" /* Address */]();
        this._departments = [];
        this.OnClose = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.OnInit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.search = function (text$) {
            return text$
                .map(function (term) { return term === '' ? []
                : _this.DepartmentsList.filter(function (v) { return v.name.toLowerCase().indexOf(term.toLowerCase()) > -1; }).slice(0, 10); });
        };
        this.departmentFormatter = function (x) { return x.name; };
    }
    AddressFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.OnInit.next(null);
        this.departmentService.getDepartments().subscribe(function (data) {
            _this._departments = data;
        });
    };
    Object.defineProperty(AddressFormComponent.prototype, "Address", {
        get: function () {
            return this._address;
        },
        set: function (value) {
            var _this = this;
            if (value == null) {
                return;
            }
            this._address = value;
            // Если карта готова - рисует, если нет, то подписываемся на карту.
            if (this.map.MapReady) {
                this.DrawAddressMarker();
            }
            else {
                this.map.OnReady.subscribe(function (e) {
                    _this.DrawAddressMarker();
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddressFormComponent.prototype, "DepartmentsList", {
        get: function () {
            return this._departments;
        },
        enumerable: true,
        configurable: true
    });
    AddressFormComponent.prototype.DrawAddressMarker = function () {
        this.map.RemoveAllMarkers();
        if (this._address.gpsPoint.lat !== 0) {
            var geo = new __WEBPACK_IMPORTED_MODULE_3__shared_modules_map_module_GpsPoint__["a" /* GpsPoint */](this._address.gpsPoint.lat, this._address.gpsPoint.lon);
            this.map.AddMarker(geo);
            this.map.map.panTo([this._address.gpsPoint.lat, this._address.gpsPoint.lon]);
        }
    };
    AddressFormComponent.prototype.SaveButtonClick = function () {
        var _this = this;
        if (this.map.markers.length > 0) {
            var m = this.map.markers[0].getLatLng();
            this._address.gpsPoint.lon = m.lng;
            this._address.gpsPoint.lat = m.lat;
        }
        this.addressService.addAddress(this._address).subscribe(function (data) {
            _this.Address = data;
            _this.CloseModal();
        }, function (error) { return console.log(error); });
    };
    AddressFormComponent.prototype.PutViewMarker = function () {
        var center = this.map.GetCenterLtLn();
        this.map.RemoveAllMarkers();
        this.map.AddMarker(center);
    };
    AddressFormComponent.prototype.CloseModal = function () {
        this.modalService.close();
        this.OnClose.next(null);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__shared_modules_map_module_map_component__["a" /* MapComponent */])
    ], AddressFormComponent.prototype, "map", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], AddressFormComponent.prototype, "OnClose", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], AddressFormComponent.prototype, "OnInit", void 0);
    AddressFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-address-form',
            template: __webpack_require__("../../../../../src/app/layout/address/address-form/address-form.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_6__shared_services_DepartmentService__["a" /* DepartmentService */], __WEBPACK_IMPORTED_MODULE_4__shared_services_AddressService__["a" /* AddressService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */],
            __WEBPACK_IMPORTED_MODULE_4__shared_services_AddressService__["a" /* AddressService */],
            __WEBPACK_IMPORTED_MODULE_6__shared_services_DepartmentService__["a" /* DepartmentService */]])
    ], AddressFormComponent);
    return AddressFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/address/address-form/address-form.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressFormModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_modules_map_module_map_module__ = __webpack_require__("../../../../../src/app/shared/modules/map-module/map.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__address_form_component__ = __webpack_require__("../../../../../src/app/layout/address/address-form/address-form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AddressFormModule = (function () {
    function AddressFormModule() {
    }
    AddressFormModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */], __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["h" /* NgbModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_4__shared_modules_map_module_map_module__["a" /* MapModule */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormsModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_6__address_form_component__["a" /* AddressFormComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_6__address_form_component__["a" /* AddressFormComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_6__address_form_component__["a" /* AddressFormComponent */]]
        })
    ], AddressFormModule);
    return AddressFormModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/address/address-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__address_component__ = __webpack_require__("../../../../../src/app/layout/address/address.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__address_component__["a" /* AddressComponent */]
    }
];
var AddressRoutingModule = (function () {
    function AddressRoutingModule() {
    }
    AddressRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], AddressRoutingModule);
    return AddressRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/address/address.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <app-page-header [heading]=\"'Addresses' | translate\" [icon]=\"'fa-building'\">\r\n        <button type=\"button\" class=\"btn btn-link\" (click)=\"RefreshList();\">\r\n            <i *ngIf=\"!loading\" style=\"color: grey;\" class=\"fa fa-refresh fa-2x\"></i>\r\n            <i *ngIf=\"loading\" style=\"color: grey;\" class=\"fa fa-spin fa-refresh fa-2x\"></i>\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"AddButtonClick();\">{{ 'Add' | translate }}</button>\r\n    </app-page-header>\r\n    <div class=\"card-body table-responsive\">\r\n        <table class=\"table\">\r\n            <thead>\r\n            <tr>\r\n                <th>{{ 'Label' | translate }}</th>\r\n                <th>{{ 'Rank' | translate }}</th>\r\n                <th>{{ 'Department' | translate }}</th>\r\n                <th></th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr *ngFor=\"let addr of addressList\">\r\n                <td>{{ addr.label }}</td>\r\n                <td>{{ addr.rank | number:'1.0-0' }}</td>\r\n                <td>\r\n                    <span *ngIf=\"addr.department != null\">\r\n                        {{ addr.department.name }}\r\n                    </span>\r\n                </td>\r\n                <td>\r\n                    <button type=\"button\" class=\"btn btn-danger\" (click)=\"DeleteButtonClick(addr.id);\">{{ 'Delete' | translate }}</button>\r\n                </td>\r\n            </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/address/address.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_AddressService__ = __webpack_require__("../../../../../src/app/shared/services/AddressService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__address_form_address_form_component__ = __webpack_require__("../../../../../src/app/layout/address/address-form/address-form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddressComponent = (function () {
    function AddressComponent(addressService, modalService) {
        this.addressService = addressService;
        this.modalService = modalService;
        this.loading = false;
        this.addressList = [];
    }
    AddressComponent.prototype.ngOnInit = function () {
        this.RefreshList();
    };
    AddressComponent.prototype.RefreshList = function () {
        var _this = this;
        this.loading = true;
        this.addressService.getAddresses().subscribe(function (data) {
            _this.addressList = data;
            _this.loading = false;
        });
    };
    AddressComponent.prototype.AddButtonClick = function () {
        var _this = this;
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_3__address_form_address_form_component__["a" /* AddressFormComponent */]);
        var form = modalRef.componentInstance;
        form.OnClose.subscribe(function (e) {
            _this.RefreshList();
        });
    };
    AddressComponent.prototype.DeleteButtonClick = function (id) {
        var _this = this;
        this.loading = true;
        this.addressService.deleteAddress(id).subscribe(function (data) {
            _this.RefreshList();
        });
    };
    AddressComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-address',
            template: __webpack_require__("../../../../../src/app/layout/address/address.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__shared_services_AddressService__["a" /* AddressService */], __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["g" /* NgbModal */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_AddressService__["a" /* AddressService */], __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["g" /* NgbModal */]])
    ], AddressComponent);
    return AddressComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/address/address.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressModule", function() { return AddressModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared___ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_modules_map_module_map_module__ = __webpack_require__("../../../../../src/app/shared/modules/map-module/map.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__address_routing_module__ = __webpack_require__("../../../../../src/app/layout/address/address-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__address_form_address_form_module__ = __webpack_require__("../../../../../src/app/layout/address/address-form/address-form.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__address_component__ = __webpack_require__("../../../../../src/app/layout/address/address.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AddressModule = (function () {
    function AddressModule() {
    }
    AddressModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_5__address_routing_module__["a" /* AddressRoutingModule */], __WEBPACK_IMPORTED_MODULE_3__shared___["a" /* PageHeaderModule */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */], __WEBPACK_IMPORTED_MODULE_4__shared_modules_map_module_map_module__["a" /* MapModule */], __WEBPACK_IMPORTED_MODULE_6__address_form_address_form_module__["a" /* AddressFormModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_7__address_component__["a" /* AddressComponent */]]
        })
    ], AddressModule);
    return AddressModule;
}());



/***/ })

});
//# sourceMappingURL=address.module.chunk.js.map
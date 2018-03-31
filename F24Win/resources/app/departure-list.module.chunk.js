webpackJsonp(["departure-list.module"],{

/***/ "../../../../../src/app/layout/departure-list/add-departure-modal/add-departure-modal.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">{{ 'Departure' | translate }}</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"CloseModal();\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n    <div class=\"form-group\">\r\n        <label for=\"address\">{{'Address' | translate }}:</label>\r\n        <input id=\"address\" type=\"text\"\r\n               [resultFormatter]=\"AddressFormatter\"\r\n               [inputFormatter]=\"AddressFormatter\"\r\n               class=\"form-control\"\r\n               [class.is-invalid]=\"AddressSearchFailed\"\r\n               [(ngModel)]=\"Address\"\r\n               [ngbTypeahead]=\"SearchAddress\" />\r\n        <span *ngIf=\"AddressSearching\">{{ 'Searching' | translate }}...</span>\r\n        <div class=\"invalid-feedback\" *ngIf=\"AddressSearchFailed\"> {{ 'Not found' | translate }}</div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"intent\">{{ 'Intent' | translate }}</label>\r\n        <input id=\"intent\" type=\"text\" [(ngModel)]=\"_departure.intent\" class=\"form-control\"/>\r\n    </div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"CloseModal();\">{{ 'Cancel' | translate }}</button>\r\n    <button type=\"button\" class=\"btn btn-success\" (click)=\"SaveButtonClick();\">{{ 'Save' | translate }}</button>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/departure-list/add-departure-modal/add-departure-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddDepartureModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_DepartureService__ = __webpack_require__("../../../../../src/app/shared/services/DepartureService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_models_Departure__ = __webpack_require__("../../../../../src/app/shared/models/Departure.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_models_Address__ = __webpack_require__("../../../../../src/app/shared/models/Address.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_AddressService__ = __webpack_require__("../../../../../src/app/shared/services/AddressService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_rxjs_add_operator_merge__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_providers_StringDateProvider__ = __webpack_require__("../../../../../src/app/shared/providers/StringDateProvider.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var AddDepartureModalComponent = (function () {
    function AddDepartureModalComponent(_modalService, _departureService, _addressService) {
        var _this = this;
        this._modalService = _modalService;
        this._departureService = _departureService;
        this._addressService = _addressService;
        this._departure = new __WEBPACK_IMPORTED_MODULE_4__shared_models_Departure__["a" /* Departure */]();
        this.OnClose = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._address = new __WEBPACK_IMPORTED_MODULE_5__shared_models_Address__["a" /* Address */]();
        this.AddressSearching = false;
        this.AddressSearchFailed = false;
        this.hideSearchingAddress = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */](function () { return function () { return _this.AddressSearching = false; }; });
        this.SearchAddress = function (text$) {
            return text$
                .debounceTime(300)
                .distinctUntilChanged()
                .do(function () { return _this.AddressSearching = true; })
                .switchMap(function (term) { return term === '' ? [] :
                _this._addressService.getAddressesStartWith(term)
                    .do(function () { return _this.AddressSearchFailed = false; })
                    .catch(function () {
                    _this.AddressSearchFailed = true;
                    return Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_observable_of__["a" /* of */])([]);
                }); })
                .do(function () { return _this.AddressSearching = false; })
                .merge(_this.hideSearchingAddress);
        };
    }
    Object.defineProperty(AddDepartureModalComponent.prototype, "Address", {
        get: function () {
            return this._address;
        },
        set: function (value) {
            if (value === null) {
                return;
            }
            this._address = value;
            this._departure.address = this._address.label;
            this._departure.gpsPoint = this._address.gpsPoint;
            this._departure.gpsPoint.id = 0;
        },
        enumerable: true,
        configurable: true
    });
    AddDepartureModalComponent.prototype.ngOnInit = function () {
    };
    AddDepartureModalComponent.prototype.CloseModal = function () {
        this._modalService.close();
        this.OnClose.next(null);
    };
    AddDepartureModalComponent.prototype.AddressFormatter = function (x) {
        return x.label;
    };
    AddDepartureModalComponent.prototype.SaveButtonClick = function () {
        var _this = this;
        this._departure.dateTime = new Date(Date.now()).toISOString();
        this._departure.gpsPoint.id = 0;
        this._departureService.addDeparture(this._departure).subscribe(function (data) {
            _this.CloseModal();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], AddDepartureModalComponent.prototype, "OnClose", void 0);
    AddDepartureModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-departure-modal',
            template: __webpack_require__("../../../../../src/app/layout/departure-list/add-departure-modal/add-departure-modal.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__shared_services_DepartureService__["a" /* DepartureService */], __WEBPACK_IMPORTED_MODULE_6__shared_services_AddressService__["a" /* AddressService */], __WEBPACK_IMPORTED_MODULE_15__shared_providers_StringDateProvider__["a" /* StringDateProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_DepartureService__["a" /* DepartureService */],
            __WEBPACK_IMPORTED_MODULE_6__shared_services_AddressService__["a" /* AddressService */]])
    ], AddDepartureModalComponent);
    return AddDepartureModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/departure-list/departure-list-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DepartureListRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__departure_list_component__ = __webpack_require__("../../../../../src/app/layout/departure-list/departure-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__departure_list_component__["a" /* DepartureListComponent */]
    }
];
var DepartureListRoutingModule = (function () {
    function DepartureListRoutingModule() {
    }
    DepartureListRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], DepartureListRoutingModule);
    return DepartureListRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/departure-list/departure-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <app-page-header [heading]=\"'Departures'  | translate\" [icon]=\"'fa-mail-forward'\">\r\n        <button type=\"button\" class=\"btn btn-link\" (click)=\"RefreshList();\">\r\n            <i *ngIf=\"!_loading\" style=\"color: grey;\" class=\"fa fa-refresh fa-2x\"></i>\r\n            <i *ngIf=\"_loading\" style=\"color: grey;\" class=\"fa fa-spin fa-refresh fa-2x\"></i>\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-link\" (click)=\"ShowAllDepartures();\">{{ 'Show all' | translate }}</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"AddButtonClick();\">{{ 'Add' | translate }}</button>\r\n    </app-page-header>\r\n    <div class=\"card-body table-responsive\">\r\n            <ngb-alert *ngIf=\"!_hideAlert\" type=\"info\" (close)=\"CloseAlert();\">\r\n                {{ 'Only active are shown.' | translate }}\r\n            </ngb-alert>\r\n        <table class=\"table\">\r\n            <thead>\r\n            <tr>\r\n                <th>{{ 'Address' | translate }}</th>\r\n                <th>{{ 'Time' | translate }}</th>\r\n                <th>{{ 'Intent' | translate }}</th>\r\n                <th></th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr *ngFor=\"let dep of _departures\">\r\n                <td>{{ dep.address}}</td>\r\n                <td>{{ dep.dateTime | amFromUtc | amLocal | amDateFormat: 'YYYY-MM-DD HH:mm' }}</td>\r\n                <td>{{ dep.intent}}</td>\r\n                <td>\r\n                    <button type=\"button\" class=\"btn btn-info\" (click)=\"ManageButtonClick(dep);\">{{ 'Manage' | translate }}</button>\r\n                </td>\r\n            </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/departure-list/departure-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DepartureListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_StorageService__ = __webpack_require__("../../../../../src/app/shared/services/StorageService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_DepartureService__ = __webpack_require__("../../../../../src/app/shared/services/DepartureService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_departure_modal_add_departure_modal_component__ = __webpack_require__("../../../../../src/app/layout/departure-list/add-departure-modal/add-departure-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DepartureListComponent = (function () {
    function DepartureListComponent(_departureService, _storage, _modalService, router) {
        this._departureService = _departureService;
        this._storage = _storage;
        this._modalService = _modalService;
        this.router = router;
        this._departureAlert = 'departure_alert';
        this._loading = false;
        this.fireCarsList = [];
        this._departures = [];
        var alert = _storage.GetLocalAsBoolean(this._departureAlert);
        this._hideAlert = alert;
    }
    DepartureListComponent.prototype.ngOnInit = function () {
        this.RefreshList();
    };
    DepartureListComponent.prototype.RefreshList = function () {
        var _this = this;
        this._loading = true;
        this._departureService.getDepartures().subscribe(function (data) {
            _this._departures = data;
            _this._loading = false;
        });
    };
    DepartureListComponent.prototype.AddButtonClick = function () {
        var _this = this;
        var modalRef = this._modalService.open(__WEBPACK_IMPORTED_MODULE_4__add_departure_modal_add_departure_modal_component__["a" /* AddDepartureModalComponent */]);
        var form = modalRef.componentInstance;
        form.OnClose.subscribe(function (e) {
            _this.RefreshList();
        });
    };
    DepartureListComponent.prototype.CloseAlert = function () {
        this._hideAlert = true;
        this._storage.SetLocalData('departure_alert', this._hideAlert.toString());
    };
    DepartureListComponent.prototype.ManageButtonClick = function (dep) {
        this.router.navigate(['/departure', dep.id]);
    };
    DepartureListComponent.prototype.ShowAllDepartures = function () {
        var _this = this;
        this._loading = true;
        this._departureService.getDepartures(true).subscribe(function (data) {
            _this._departures = data;
            _this._loading = false;
        });
    };
    DepartureListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-departure-list',
            template: __webpack_require__("../../../../../src/app/layout/departure-list/departure-list.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_3__shared_services_DepartureService__["a" /* DepartureService */], __WEBPACK_IMPORTED_MODULE_2__shared_services_StorageService__["a" /* StorageService */], __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["g" /* NgbModal */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_services_DepartureService__["a" /* DepartureService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_StorageService__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["g" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* Router */]])
    ], DepartureListComponent);
    return DepartureListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/departure-list/departure-list.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartureListModule", function() { return DepartureListModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared___ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__departure_list_component__ = __webpack_require__("../../../../../src/app/layout/departure-list/departure-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__departure_list_routing_module__ = __webpack_require__("../../../../../src/app/layout/departure-list/departure-list-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__add_departure_modal_add_departure_modal_component__ = __webpack_require__("../../../../../src/app/layout/departure-list/add-departure-modal/add-departure-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_moment__ = __webpack_require__("../../../../angular2-moment/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angular2_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var DepartureListModule = (function () {
    function DepartureListModule() {
    }
    DepartureListModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_6__departure_list_routing_module__["a" /* DepartureListRoutingModule */], __WEBPACK_IMPORTED_MODULE_4__shared___["a" /* PageHeaderModule */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */], __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["h" /* NgbModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_8__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_9_angular2_moment__["MomentModule"]],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__departure_list_component__["a" /* DepartureListComponent */], __WEBPACK_IMPORTED_MODULE_7__add_departure_modal_add_departure_modal_component__["a" /* AddDepartureModalComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_7__add_departure_modal_add_departure_modal_component__["a" /* AddDepartureModalComponent */]]
        })
    ], DepartureListModule);
    return DepartureListModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/StorageService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__storage_LocalClientStorage__ = __webpack_require__("../../../../../src/app/shared/storage/LocalClientStorage.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StorageService = (function () {
    function StorageService() {
        this._clientStorage = new __WEBPACK_IMPORTED_MODULE_2__storage_LocalClientStorage__["a" /* LocalClientStorage */]();
    }
    StorageService.prototype.SetLocalData = function (key, data) {
        this._clientStorage.SetData(key, data);
    };
    StorageService.prototype.GetLocalData = function (key) {
        return this._clientStorage.GetData(key);
    };
    StorageService.prototype.GetLocalAsBoolean = function (key) {
        return this._clientStorage.GetAsBoolean(key);
    };
    StorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], StorageService);
    return StorageService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/storage/LocalClientStorage.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalClientStorage; });
var LocalClientStorage = (function () {
    function LocalClientStorage() {
    }
    LocalClientStorage.prototype.GetData = function (key) {
        var data = localStorage.getItem(key);
        return data;
    };
    LocalClientStorage.prototype.SetData = function (key, data) {
        localStorage.setItem(key, data);
    };
    LocalClientStorage.prototype.GetAsBoolean = function (key) {
        var data = localStorage.getItem(key);
        if (data === 'true') {
            return true;
        }
        return false;
    };
    return LocalClientStorage;
}());



/***/ })

});
//# sourceMappingURL=departure-list.module.chunk.js.map
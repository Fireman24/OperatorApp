webpackJsonp(["fire-list.module"],{

/***/ "../../../../../src/app/layout/fire-list/add-fire-modal/add-fire-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">{{ 'Fire' | translate }}</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"CloseModal();\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n    <div class=\"form-group\">\r\n        <label for=\"address\">{{'Address' | translate }}:</label>\r\n        <input id=\"address\" type=\"text\"\r\n               [resultFormatter]=\"AddressFormatter\"\r\n               [inputFormatter]=\"AddressFormatter\"\r\n               class=\"form-control\"\r\n               [class.is-invalid]=\"AddressSearchFailed\"\r\n               [(ngModel)]=\"Address\"\r\n               [ngbTypeahead]=\"SearchAddress\" />\r\n        <span *ngIf=\"AddressSearching\">{{ 'Searching' | translate }}...</span>\r\n        <div class=\"invalid-feedback\" *ngIf=\"AddressSearchFailed\"> {{ 'Not found' | translate }}</div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"comments\">{{ 'Comments' | translate }}</label>\r\n        <input id=\"comments\" type=\"text\" [(ngModel)]=\"_fire.comments\" class=\"form-control\"/>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"receiver\">{{ 'Receiver' | translate }}</label>\r\n        <input id=\"receiver\" type=\"text\" [(ngModel)]=\"_fire.receiver\" class=\"form-control\"/>\r\n    </div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"CloseModal();\">{{ 'Cancel' | translate }}</button>\r\n    <button type=\"button\" class=\"btn btn-success\" (click)=\"SaveButtonClick();\">{{ 'Save' | translate }}</button>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/fire-list/add-fire-modal/add-fire-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddFireModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_DepartureService__ = __webpack_require__("../../../../../src/app/shared/services/DepartureService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_models_Address__ = __webpack_require__("../../../../../src/app/shared/models/Address.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_AddressService__ = __webpack_require__("../../../../../src/app/shared/services/AddressService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_add_operator_merge__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_providers_StringDateProvider__ = __webpack_require__("../../../../../src/app/shared/providers/StringDateProvider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_models_Fire__ = __webpack_require__("../../../../../src/app/shared/models/Fire.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_services_FireService__ = __webpack_require__("../../../../../src/app/shared/services/FireService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var AddFireModalComponent = (function () {
    function AddFireModalComponent(_modalService, _fireService, _addressService) {
        var _this = this;
        this._modalService = _modalService;
        this._fireService = _fireService;
        this._addressService = _addressService;
        this._fire = new __WEBPACK_IMPORTED_MODULE_15__shared_models_Fire__["a" /* Fire */]();
        this.OnClose = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._address = new __WEBPACK_IMPORTED_MODULE_4__shared_models_Address__["a" /* Address */]();
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
                    return Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_of__["a" /* of */])([]);
                }); })
                .do(function () { return _this.AddressSearching = false; })
                .merge(_this.hideSearchingAddress);
        };
    }
    Object.defineProperty(AddFireModalComponent.prototype, "Address", {
        get: function () {
            return this._address;
        },
        set: function (value) {
            if (value === null) {
                return;
            }
            this._address = value;
            this._fire.address = this._address.label;
            this._fire.gpsPoint = this._address.gpsPoint;
            this._fire.rank = this._address.rank;
            this._fire.department = this._address.department;
            this._fire.gpsPoint.id = 0;
        },
        enumerable: true,
        configurable: true
    });
    AddFireModalComponent.prototype.ngOnInit = function () {
    };
    AddFireModalComponent.prototype.CloseModal = function () {
        this._modalService.close();
        this.OnClose.next(null);
    };
    AddFireModalComponent.prototype.AddressFormatter = function (x) {
        return x.label;
    };
    AddFireModalComponent.prototype.SaveButtonClick = function () {
        var _this = this;
        this._fire.startDateTime = new Date(Date.now()).toISOString();
        this._fireService.addFire(this._fire).subscribe(function (data) {
            _this.CloseModal();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], AddFireModalComponent.prototype, "OnClose", void 0);
    AddFireModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-fire-modal',
            template: __webpack_require__("../../../../../src/app/layout/fire-list/add-fire-modal/add-fire-modal.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__shared_services_DepartureService__["a" /* DepartureService */], __WEBPACK_IMPORTED_MODULE_5__shared_services_AddressService__["a" /* AddressService */], __WEBPACK_IMPORTED_MODULE_14__shared_providers_StringDateProvider__["a" /* StringDateProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */],
            __WEBPACK_IMPORTED_MODULE_16__shared_services_FireService__["a" /* FireService */],
            __WEBPACK_IMPORTED_MODULE_5__shared_services_AddressService__["a" /* AddressService */]])
    ], AddFireModalComponent);
    return AddFireModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/fire-list/fire-list-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FireListRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fire_list_component__ = __webpack_require__("../../../../../src/app/layout/fire-list/fire-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__fire_list_component__["a" /* FireListComponent */]
    }
];
var FireListRoutingModule = (function () {
    function FireListRoutingModule() {
    }
    FireListRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], FireListRoutingModule);
    return FireListRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/fire-list/fire-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <app-page-header [heading]=\"'Fires'  | translate\" [icon]=\"'fa-mail-forward'\">\r\n        <button type=\"button\" class=\"btn btn-link\" (click)=\"RefreshList();\">\r\n            <i *ngIf=\"!_loading\" style=\"color: grey;\" class=\"fa fa-refresh fa-2x\"></i>\r\n            <i *ngIf=\"_loading\" style=\"color: grey;\" class=\"fa fa-spin fa-refresh fa-2x\"></i>\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-link\" (click)=\"ShowAllFires();\">{{ 'Show all' | translate }}</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"AddButtonClick();\">{{ 'Add' | translate }}</button>\r\n\r\n    </app-page-header>\r\n    <div class=\"card-body table-responsive\">\r\n        <table class=\"table\">\r\n            <thead>\r\n            <tr>\r\n                <th>{{ 'Address' | translate }}</th>\r\n                <th>{{ 'Time' | translate }}</th>\r\n                <th>{{ 'Rank' | translate }}</th>\r\n                <th></th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr *ngFor=\"let fire of _fires\">\r\n                <td>{{ fire.address}}</td>\r\n                <td>{{ fire.startDateTime | amFromUtc | amLocal | amDateFormat: 'YYYY-MM-DD HH:mm' }}</td>\r\n                <td>{{ fire.rank}}</td>\r\n                <td>\r\n                    <button type=\"button\" class=\"btn btn-info\" (click)=\"ManageButtonClick(fire);\">{{ 'Manage' | translate }}</button>\r\n                </td>\r\n            </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/fire-list/fire-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FireListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_FireService__ = __webpack_require__("../../../../../src/app/shared/services/FireService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_fire_modal_add_fire_modal_component__ = __webpack_require__("../../../../../src/app/layout/fire-list/add-fire-modal/add-fire-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FireListComponent = (function () {
    function FireListComponent(_fireService, _router, _modalService) {
        this._fireService = _fireService;
        this._router = _router;
        this._modalService = _modalService;
        this._fires = [];
        this._loading = false;
    }
    FireListComponent.prototype.ngOnInit = function () {
        this.RefreshList();
    };
    FireListComponent.prototype.RefreshList = function () {
        var _this = this;
        this._loading = true;
        this._fireService.getFires().subscribe(function (data) {
            _this._fires = data;
            _this._loading = false;
        });
    };
    FireListComponent.prototype.AddButtonClick = function () {
        var _this = this;
        var modalRef = this._modalService.open(__WEBPACK_IMPORTED_MODULE_3__add_fire_modal_add_fire_modal_component__["a" /* AddFireModalComponent */]);
        var form = modalRef.componentInstance;
        form.OnClose.subscribe(function (e) {
            _this.RefreshList();
        });
    };
    FireListComponent.prototype.ManageButtonClick = function (fire) {
        this._router.navigate(['/fire', fire.id]);
    };
    FireListComponent.prototype.ShowAllFires = function () {
        var _this = this;
        this._loading = true;
        this._fireService.getFires(true).subscribe(function (data) {
            _this._fires = data;
            _this._loading = false;
        });
    };
    FireListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-fire-list',
            template: __webpack_require__("../../../../../src/app/layout/fire-list/fire-list.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__shared_services_FireService__["a" /* FireService */], __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["g" /* NgbModal */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_FireService__["a" /* FireService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["g" /* NgbModal */]])
    ], FireListComponent);
    return FireListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/fire-list/fire-list.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FireListModule", function() { return FireListModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared___ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_moment__ = __webpack_require__("../../../../angular2-moment/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__add_fire_modal_add_fire_modal_component__ = __webpack_require__("../../../../../src/app/layout/fire-list/add-fire-modal/add-fire-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__fire_list_component__ = __webpack_require__("../../../../../src/app/layout/fire-list/fire-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__fire_list_routing_module__ = __webpack_require__("../../../../../src/app/layout/fire-list/fire-list-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var FireListModule = (function () {
    function FireListModule() {
    }
    FireListModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_9__fire_list_routing_module__["a" /* FireListRoutingModule */], __WEBPACK_IMPORTED_MODULE_4__shared___["a" /* PageHeaderModule */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */], __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["h" /* NgbModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_6_angular2_moment__["MomentModule"]],
            declarations: [__WEBPACK_IMPORTED_MODULE_8__fire_list_component__["a" /* FireListComponent */], __WEBPACK_IMPORTED_MODULE_7__add_fire_modal_add_fire_modal_component__["a" /* AddFireModalComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_7__add_fire_modal_add_fire_modal_component__["a" /* AddFireModalComponent */]]
        })
    ], FireListModule);
    return FireListModule;
}());



/***/ })

});
//# sourceMappingURL=fire-list.module.chunk.js.map
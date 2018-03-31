webpackJsonp(["departure.module"],{

/***/ "../../../../../src/app/layout/departure/add-car-modal/add-car-modal.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">{{ 'Add firecar' | translate }}</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"CloseModal();\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n    <div class=\"row\">\r\n        <div class=\"col\">\r\n            <div ngbDropdown class=\"d-inline-block\">\r\n                <button class=\"btn btn-outline-primary\" id=\"departments\" ngbDropdownToggle>{{ 'Departments' | translate}}</button>\r\n                <div ngbDropdownMenu aria-labelledby=\"departments\">\r\n                    <button *ngFor=\"let d of _departments\" class=\"dropdown-item\" (click)=\"SelectDepartment(d);\" placement=\"right\" ngbTooltip=\"{{d.address}}\">\r\n                        {{d.name}}\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col\">\r\n            <div ngbDropdown class=\"d-inline-block\">\r\n                <button class=\"btn btn-outline-primary\" id=\"firecars\" ngbDropdownToggle>{{'Firecars' | translate }}</button>\r\n                <div ngbDropdownMenu aria-labelledby=\"firecars\">\r\n                    <button *ngFor=\"let c of _cars\" class=\"dropdown-item\" (click)=\"SelectCar(c);\" placement=\"right\" ngbTooltip=\"{{c.specialization}}\">\r\n                        {{c.name}}\r\n                    </button>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/departure/add-car-modal/add-car-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCarModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_merge__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_services_DepartmentService__ = __webpack_require__("../../../../../src/app/shared/services/DepartmentService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AddCarModalComponent = (function () {
    function AddCarModalComponent(_modalService, _departmentService) {
        this._modalService = _modalService;
        this._departmentService = _departmentService;
        this.car = null;
        this._cars = [];
        this._departments = [];
        this.OnClose = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    AddCarModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._departmentService.getDepartments().subscribe(function (data) { return _this._departments = data; });
    };
    AddCarModalComponent.prototype.CloseModal = function () {
        this._modalService.close();
        this.OnClose.next(null);
    };
    AddCarModalComponent.prototype.SelectCar = function (car) {
        this.car = car;
        this.CloseModal();
    };
    AddCarModalComponent.prototype.SelectDepartment = function (dep) {
        var _this = this;
        this._departmentService.getDepartmentById(dep.id).subscribe(function (data) { return _this._cars = data.fireCars; });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], AddCarModalComponent.prototype, "OnClose", void 0);
    AddCarModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-car-departure-modal',
            template: __webpack_require__("../../../../../src/app/layout/departure/add-car-modal/add-car-modal.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_9__shared_services_DepartmentService__["a" /* DepartmentService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */],
            __WEBPACK_IMPORTED_MODULE_9__shared_services_DepartmentService__["a" /* DepartmentService */]])
    ], AddCarModalComponent);
    return AddCarModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/departure/add-doc-modal/add-doc-modal.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">{{ 'Add document' | translate }}</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"CloseModal();\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n    <div class=\"row\">\r\n        <div class=\"col\">\r\n            <div class=\"form-group\">\r\n                <input type=\"file\"\r\n                       id=\"file\"\r\n                       (change)=\"handleFileInput($event.target.files)\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/departure/add-doc-modal/add-doc-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddDocumentModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_DepartureService__ = __webpack_require__("../../../../../src/app/shared/services/DepartureService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_merge__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/merge.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AddDocumentModalComponent = (function () {
    function AddDocumentModalComponent(_modalService, _departmentService) {
        this._modalService = _modalService;
        this._departmentService = _departmentService;
        this.file = null;
        this.OnClose = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    AddDocumentModalComponent.prototype.ngOnInit = function () {
    };
    AddDocumentModalComponent.prototype.handleFileInput = function (files) {
        this.file = files.item(0);
        this.CloseModal();
    };
    AddDocumentModalComponent.prototype.CloseModal = function () {
        this._modalService.close();
        this.OnClose.next(null);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], AddDocumentModalComponent.prototype, "OnClose", void 0);
    AddDocumentModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-doc-departure-modal',
            template: __webpack_require__("../../../../../src/app/layout/departure/add-doc-modal/add-doc-modal.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__shared_services_DepartureService__["a" /* DepartureService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_DepartureService__["a" /* DepartureService */]])
    ], AddDocumentModalComponent);
    return AddDocumentModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/departure/departure-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DepartureRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__departure_component__ = __webpack_require__("../../../../../src/app/layout/departure/departure.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__departure_component__["a" /* DepartureComponent */]
    }
];
var DepartureRoutingModule = (function () {
    function DepartureRoutingModule() {
    }
    DepartureRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], DepartureRoutingModule);
    return DepartureRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/departure/departure.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"row\">\r\n        <div class=\"col-xl-6 text-xl-left\">\r\n            <h3>{{_departure.address}}</h3>\r\n        </div>\r\n        <div class=\"col-xl-6 text-xl-right\">\r\n            <button type=\"button\" class=\"btn btn-link\" (click)=\"ReloadData();\">\r\n                <i *ngIf=\"!_loading\" style=\"color: grey;\" class=\"fa fa-refresh fa-2x\"></i>\r\n                <i *ngIf=\"_loading\" style=\"color: grey;\" class=\"fa fa-spin fa-refresh fa-2x\"></i>\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-success\" (click)=\"SaveData();\">{{ 'Save' | translate }}</button>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-body table-responsive\">\r\n        <div class=\"row\">\r\n            <div class=\"col\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"address\">{{ 'Address' | translate }}</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"address\" [(ngModel)]=\"_departure.address\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"intent\">{{ 'Intent' | translate }}</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"intent\" [(ngModel)]=\"_departure.intent\">\r\n                </div>\r\n            </div>\r\n            <div class=\"col\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"manager\">{{ 'Manager' | translate }}</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"manager\" [(ngModel)]=\"_departure.manager\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"receiver\">{{ 'Receiver' | translate }}</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"receiver\" [(ngModel)]=\"_departure.receiver\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"comments\">{{ 'Comments' | translate }}</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"comments\" [(ngModel)]=\"_departure.comments\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"form-group col\">\r\n                <div class=\"checkbox\">\r\n                    <label>\r\n                        <input id=\"active\" type=\"checkbox\" checked [(ngModel)]=\"_departure.active\" > {{'Active' | translate }}\r\n                    </label>\r\n                </div>\r\n            </div>\r\n            <div class=\"col\">\r\n                <i>{{ 'Date' | translate }} {{ 'Time' | translate }}: {{ _departure.dateTime | amFromUtc | amLocal | amDateFormat: 'YYYY-MM-DD HH:mm' }}</i>\r\n                <button *ngIf=\"false\" type=\"button\" class=\"btn btn-sm btn-link\">{{ 'Edit' | translate }}</button>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"card col\">\r\n                <div class=\"card-header row\">\r\n                    <div class=\"col-xl-6 text-xl-left\">\r\n                        <h3>{{'Firecars' | translate }}</h3>\r\n                    </div>\r\n                    <div class=\"col-xl-6 text-xl-right\">\r\n                        <button type=\"button\" class=\"btn btn-primary -align-right\" (click)=\"AddCarButtonClick();\">{{ 'Add' | translate }}</button>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <table *ngIf=\"(_departure.fireCars != null) && (_departure.fireCars.length > 0)\" class=\"table\">\r\n                        <thead class=\"thead-dark\">\r\n                        <tr>\r\n                            <th scope=\"col\">{{ 'Name' | translate }}</th>\r\n                            <th scope=\"col\">{{ 'Specialization' | translate }}</th>\r\n                            <th></th>\r\n                        </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                        <tr *ngFor=\"let car of _departure.fireCars\">\r\n                            <td>{{car.name}}</td>\r\n                            <td>{{car.specialization}}</td>\r\n                            <td>\r\n                                <button type=\"button\" class=\"btn btn-danger\" (click)=\"RemoveFirecar(car);\" >{{ 'Remove' | translate }}</button>\r\n                                <button type=\"button\" class=\"btn btn-info\" (click)=\"GoToFirecarInfo(car);\" >{{ 'Info' | translate }}</button>\r\n                            </td>\r\n                        </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <br>\r\n        <div class=\"row\">\r\n            <div class=\"card col\">\r\n                <div class=\"card-header row\">\r\n                    <div class=\"col-xl-6 text-xl-left\">\r\n                        <h3>{{'Documents' | translate }}</h3>\r\n                    </div>\r\n                    <div class=\"col-xl-6 text-xl-right\">\r\n                        <button type=\"button\" class=\"btn btn-primary -align-right\" (click)=\"AddDocument();\" >{{ 'Add' | translate }}</button>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <table *ngIf=\"(_departure.images != null) && (_departure.images.length > 0)\" class=\"table\">\r\n                        <thead class=\"thead-dark\">\r\n                        <tr>\r\n                            <th scope=\"col\">{{ 'Name' | translate }}</th>\r\n                            <th></th>\r\n                        </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                        <tr *ngFor=\"let doc of _departure.images\">\r\n                            <td>{{doc.name}}</td>\r\n                            <td>\r\n                                <button type=\"button\" class=\"btn btn-info\" (click)=\"OpenDocumentButtonClick(doc);\">{{ 'Open' | translate }}</button>\r\n                                <button type=\"button\" class=\"btn btn-danger\" (click)=\"RemoveDocumentButtonClick(doc);\">{{ 'Remove' | translate }}</button>\r\n                            </td>\r\n                        </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <br>\r\n        <div class=\"row\">\r\n            <div class=\"card col\">\r\n                <div class=\"card-header row\">\r\n                    <div class=\"col-xl-6 text-xl-left\">\r\n                        <h3>{{'History' | translate }}</h3>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"row\">\r\n                        <div class=\"input-group mb-3\">\r\n                            <input type=\"text\" #htext class=\"form-control\" placeholder=\"{{ 'Message' | translate }}\">\r\n                            <div class=\"input-group-append\">\r\n                                <button class=\"btn btn-outline-secondary\" (click)=\"AddHistoryRecord(htext.value);\" type=\"button\">{{ 'Add' | translate }}</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <table *ngIf=\"(_departure.history != null) && (_departure.history.length > 0)\" class=\"table\">\r\n                        <thead class=\"thead-dark\">\r\n                        <tr>\r\n                            <th scope=\"col\">{{ 'Message' | translate }}</th>\r\n                            <th scope=\"col\">{{ 'Time' | translate }}</th>\r\n                        </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                        <tr *ngFor=\"let hys of _departure.history\">\r\n                            <td>{{hys.record}}</td>\r\n                            <td>{{hys.dateTime | amFromUtc | amLocal | amDateFormat: 'YYYY-MM-DD HH:mm'}}</td>\r\n                        </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/departure/departure.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DepartureComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_models_Departure__ = __webpack_require__("../../../../../src/app/shared/models/Departure.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_DepartureService__ = __webpack_require__("../../../../../src/app/shared/services/DepartureService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_models_HistoryRecord__ = __webpack_require__("../../../../../src/app/shared/models/HistoryRecord.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__add_car_modal_add_car_modal_component__ = __webpack_require__("../../../../../src/app/layout/departure/add-car-modal/add-car-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__add_doc_modal_add_doc_modal_component__ = __webpack_require__("../../../../../src/app/layout/departure/add-doc-modal/add-doc-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_services_Backend__ = __webpack_require__("../../../../../src/app/shared/services/Backend.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var DepartureComponent = (function () {
    function DepartureComponent(_activateRoute, _router, _departureService, _http, _modalService) {
        var _this = this;
        this._activateRoute = _activateRoute;
        this._router = _router;
        this._departureService = _departureService;
        this._http = _http;
        this._modalService = _modalService;
        this._departure = new __WEBPACK_IMPORTED_MODULE_2__shared_models_Departure__["a" /* Departure */]();
        this.subscription = _activateRoute.params.subscribe(function (params) { return _this.id = params['id']; });
    }
    DepartureComponent.prototype.ngOnInit = function () {
        this.ReloadData();
    };
    DepartureComponent.prototype.ReloadData = function () {
        var _this = this;
        this._loading = true;
        this._departureService.getDepartureById(this.id).subscribe(function (data) {
            _this._departure = data;
            _this._loading = false;
        });
    };
    DepartureComponent.prototype.AddCarButtonClick = function () {
        var _this = this;
        var modalRef = this._modalService.open(__WEBPACK_IMPORTED_MODULE_6__add_car_modal_add_car_modal_component__["a" /* AddCarModalComponent */]);
        var form = modalRef.componentInstance;
        form.OnClose.subscribe(function (e) {
            if (form.car != null) {
                _this._departureService.addFirecar(_this._departure.id, form.car).subscribe(function (data) {
                    _this.ReloadData();
                });
            }
        });
    };
    DepartureComponent.prototype.SaveData = function () {
        var _this = this;
        this._loading = true;
        this._departureService.updateDeparture(this._departure).subscribe(function (data) { return _this.ReloadData(); });
    };
    DepartureComponent.prototype.AddHistoryRecord = function (value) {
        var hrecord = new __WEBPACK_IMPORTED_MODULE_4__shared_models_HistoryRecord__["a" /* HistoryRecord */]();
        hrecord.dateTime = new Date(Date.now()).toISOString();
        hrecord.record = value;
        this._departure.history.push(hrecord);
    };
    DepartureComponent.prototype.RemoveFirecar = function (car) {
        var _this = this;
        this._departureService.deleteFirecar(this._departure.id, car).subscribe(function (data) { return _this.ReloadData(); });
    };
    DepartureComponent.prototype.AddDocument = function () {
        var _this = this;
        var modalRef = this._modalService.open(__WEBPACK_IMPORTED_MODULE_7__add_doc_modal_add_doc_modal_component__["a" /* AddDocumentModalComponent */]);
        var form = modalRef.componentInstance;
        form.OnClose.subscribe(function (e) {
            if (form.file != null) {
                _this._departureService.addDocument(_this._departure.id, form.file).subscribe(function (data) {
                    _this.ReloadData();
                });
            }
        });
    };
    DepartureComponent.prototype.OpenDocumentButtonClick = function (doc) {
        var docUrl = __WEBPACK_IMPORTED_MODULE_9__shared_services_Backend__["a" /* Backend */].HOST_URL + doc.url;
        window.open(docUrl);
    };
    DepartureComponent.prototype.RemoveDocumentButtonClick = function (doc) {
        var _this = this;
        this._departureService.deleteDocument(this._departure.id, doc).subscribe(function (data) { return _this.ReloadData(); });
    };
    DepartureComponent.prototype.GoToFirecarInfo = function (car) {
        this._router.navigate(['/firecar', car.id]);
    };
    DepartureComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-departure',
            template: __webpack_require__("../../../../../src/app/layout/departure/departure.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_3__shared_services_DepartureService__["a" /* DepartureService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_DepartureService__["a" /* DepartureService */],
            __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["g" /* NgbModal */]])
    ], DepartureComponent);
    return DepartureComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/departure/departure.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartureModule", function() { return DepartureModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__departure_component__ = __webpack_require__("../../../../../src/app/layout/departure/departure.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__departure_routing_module__ = __webpack_require__("../../../../../src/app/layout/departure/departure-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_moment__ = __webpack_require__("../../../../angular2-moment/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__add_car_modal_add_car_modal_component__ = __webpack_require__("../../../../../src/app/layout/departure/add-car-modal/add-car-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__add_doc_modal_add_doc_modal_component__ = __webpack_require__("../../../../../src/app/layout/departure/add-doc-modal/add-doc-modal.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var DepartureModule = (function () {
    function DepartureModule() {
    }
    DepartureModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_3__departure_routing_module__["a" /* DepartureRoutingModule */], __WEBPACK_IMPORTED_MODULE_6__shared__["a" /* PageHeaderModule */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["b" /* TranslateModule */], __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__["h" /* NgbModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_8_angular2_moment__["MomentModule"]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__departure_component__["a" /* DepartureComponent */], __WEBPACK_IMPORTED_MODULE_9__add_car_modal_add_car_modal_component__["a" /* AddCarModalComponent */], __WEBPACK_IMPORTED_MODULE_10__add_doc_modal_add_doc_modal_component__["a" /* AddDocumentModalComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_9__add_car_modal_add_car_modal_component__["a" /* AddCarModalComponent */], __WEBPACK_IMPORTED_MODULE_10__add_doc_modal_add_doc_modal_component__["a" /* AddDocumentModalComponent */]]
        })
    ], DepartureModule);
    return DepartureModule;
}());



/***/ })

});
//# sourceMappingURL=departure.module.chunk.js.map
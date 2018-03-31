webpackJsonp(["operator.module"],{

/***/ "../../../../../src/app/layout/operator/operator-form/operator-form.component.html":
/***/ (function(module, exports) {

module.exports = "    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">{{ 'Operator' | translate }}</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"CloseModal();\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-xl-6 text-xs-left\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"name\">{{ 'Name' | translate }}</label>\r\n                        <input class=\"form-control\" id=\"name\" type=\"text\" [(ngModel)]=\"Operator.name\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"role\">{{ 'Role' | translate }}</label>\r\n                        <input class=\"form-control\" id=\"role\" type=\"text\" [(ngModel)]=\"Operator.role\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <div class=\"checkbox\">\r\n                            <label>\r\n                                <input id=\"active\" type=\"checkbox\" checked [(ngModel)]=\"Operator.active\" > {{'Active' | translate }}\r\n                            </label>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n                <div class=\"col-xl-6 text-xs-left\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"login\">{{ 'Login' | translate }}</label>\r\n                        <input class=\"form-control\" id=\"login\" type=\"text\" [(ngModel)]=\"Operator.login\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"key\">{{ 'Key' | translate }}</label>\r\n                        <input class=\"form-control\" id=\"key\" type=\"text\" [(ngModel)]=\"Operator.key\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <button type=\"button\" #putMarkerButton class=\"btn btn-sm btn-secondary\" (click)=\"PutViewMarker();\">\r\n                            {{'Add view marker' | translate}}</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        <div class=\"row\" style=\"height: 250px; width: 100%;\">\r\n            <div class=\"col-xl-12 text-xs-center\">\r\n                <app-map #map style=\"height: 100%; width: 100%;\" ></app-map>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"CloseModal();\">{{ 'Cancel' | translate }}</button>\r\n        <button type=\"button\" class=\"btn btn-success\" (click)=\"SaveButtonClick();\">{{ 'Save' | translate }}</button>\r\n    </div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/operator/operator-form/operator-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OperatorFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_models_Operator__ = __webpack_require__("../../../../../src/app/shared/models/Operator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_modules_map_module_map_component__ = __webpack_require__("../../../../../src/app/shared/modules/map-module/map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_OperatorService__ = __webpack_require__("../../../../../src/app/shared/services/OperatorService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_modules_map_module_GpsPoint__ = __webpack_require__("../../../../../src/app/shared/modules/map-module/GpsPoint.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OperatorFormComponent = (function () {
    function OperatorFormComponent(modalService, operatorService) {
        this.modalService = modalService;
        this.operatorService = operatorService;
        this._operator = new __WEBPACK_IMPORTED_MODULE_2__shared_models_Operator__["a" /* Operator */]();
        this.OnClose = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    Object.defineProperty(OperatorFormComponent.prototype, "Operator", {
        get: function () {
            return this._operator;
        },
        set: function (value) {
            this._operator = value;
            this.map.RemoveAllMarkers();
            if (this._operator.geoZone != null) {
                var geo = new __WEBPACK_IMPORTED_MODULE_5__shared_modules_map_module_GpsPoint__["a" /* GpsPoint */](this._operator.geoZone.lat, this._operator.geoZone.lon);
                this.map.AddMarker(geo);
            }
        },
        enumerable: true,
        configurable: true
    });
    OperatorFormComponent.prototype.SaveButtonClick = function () {
        var _this = this;
        if (this.map.markers.length > 0) {
            var m = this.map.markers[0].getLatLng();
            this._operator.geoZone = new __WEBPACK_IMPORTED_MODULE_5__shared_modules_map_module_GpsPoint__["a" /* GpsPoint */]();
            this._operator.geoZone.lon = m.lng;
            this._operator.geoZone.lat = m.lat;
        }
        this.operatorService.addOperator(this.Operator).subscribe(function (data) {
            _this.Operator = data;
            _this.CloseModal();
        }, function (error) { return console.log(error); });
    };
    OperatorFormComponent.prototype.CreateNewOperator = function () {
    };
    OperatorFormComponent.prototype.EditOperator = function (operator) {
        this.Operator = operator;
    };
    OperatorFormComponent.prototype.PutViewMarker = function () {
        var center = this.map.GetCenterLtLn();
        this.map.RemoveAllMarkers();
        this.map.AddMarker(center);
    };
    OperatorFormComponent.prototype.CloseModal = function () {
        this.modalService.close();
        this.OnClose.next(null);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('content'),
        __metadata("design:type", Object)
    ], OperatorFormComponent.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__shared_modules_map_module_map_component__["a" /* MapComponent */])
    ], OperatorFormComponent.prototype, "map", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], OperatorFormComponent.prototype, "OnClose", void 0);
    OperatorFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-operator-form',
            template: __webpack_require__("../../../../../src/app/layout/operator/operator-form/operator-form.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */], __WEBPACK_IMPORTED_MODULE_4__shared_services_OperatorService__["a" /* OperatorService */]])
    ], OperatorFormComponent);
    return OperatorFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/operator/operator-form/operator-form.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OperatorFormModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_modules_map_module_map_module__ = __webpack_require__("../../../../../src/app/shared/modules/map-module/map.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__operator_form_component__ = __webpack_require__("../../../../../src/app/layout/operator/operator-form/operator-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_services_OperatorService__ = __webpack_require__("../../../../../src/app/shared/services/OperatorService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var OperatorFormModule = (function () {
    function OperatorFormModule() {
    }
    OperatorFormModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */], __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["h" /* NgbModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_4__shared_modules_map_module_map_module__["a" /* MapModule */], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormsModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__operator_form_component__["a" /* OperatorFormComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_5__operator_form_component__["a" /* OperatorFormComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_5__operator_form_component__["a" /* OperatorFormComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_7__shared_services_OperatorService__["a" /* OperatorService */]]
        })
    ], OperatorFormModule);
    return OperatorFormModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/operator/operator-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OperatorRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__operator_component__ = __webpack_require__("../../../../../src/app/layout/operator/operator.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__operator_component__["a" /* OperatorComponent */]
    }
];
var OperatorRoutingModule = (function () {
    function OperatorRoutingModule() {
    }
    OperatorRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], OperatorRoutingModule);
    return OperatorRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/operator/operator.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <app-page-header [heading]=\"'Operators' | translate\" [icon]=\"'fa-user'\">\r\n        <button type=\"button\" class=\"btn btn-link\" (click)=\"RefreshList();\">\r\n            <i *ngIf=\"!loading\" style=\"color: grey;\" class=\"fa fa-refresh fa-2x\"></i>\r\n            <i *ngIf=\"loading\" style=\"color: grey;\" class=\"fa fa-spin fa-refresh fa-2x\"></i>\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"OnAddButtonClick();\">{{ 'Add' | translate }}</button>\r\n    </app-page-header>\r\n    <div class=\"card-body table-responsive\">\r\n        <table class=\"table\">\r\n            <thead>\r\n            <tr>\r\n                <th>{{ 'Name' | translate }}</th>\r\n                <th>{{ 'Login' | translate }}</th>\r\n                <th>{{ 'Role' | translate }}</th>\r\n                <th>\r\n                </th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr *ngFor=\"let operator of operatorsList\">\r\n                <td>{{operator.name}}</td>\r\n                <td>{{operator.login}}</td>\r\n                <td>{{operator.role}}</td>\r\n                <td>\r\n                    <button *ngIf=\"operator.active\" type=\"button\" class=\"btn btn-danger\" (click)=\"OnDeactivateButtonClick(operator.id);\">{{ 'Deactivate' | translate }}</button>\r\n                </td>\r\n            </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/operator/operator.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/operator/operator.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OperatorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_form_operator_form_component__ = __webpack_require__("../../../../../src/app/layout/operator/operator-form/operator-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_OperatorService__ = __webpack_require__("../../../../../src/app/shared/services/OperatorService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OperatorComponent = (function () {
    function OperatorComponent(operatorService, modalService) {
        this.operatorService = operatorService;
        this.modalService = modalService;
        this.operatorsList = [];
        this.loading = false;
    }
    OperatorComponent.prototype.ngOnInit = function () {
        this.RefreshList();
    };
    OperatorComponent.prototype.OnAddButtonClick = function () {
        var _this = this;
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_1__operator_form_operator_form_component__["a" /* OperatorFormComponent */]);
        this.form = modalRef.componentInstance;
        this.form.CreateNewOperator();
        this.form.OnClose.subscribe(function (e) {
            _this.RefreshList();
        });
    };
    OperatorComponent.prototype.OnDeactivateButtonClick = function (operatorId) {
        var _this = this;
        this.loading = true;
        this.operatorService.deactivateOperator(operatorId).subscribe(function (data) {
            _this.RefreshList();
        }, function (error) { });
    };
    OperatorComponent.prototype.RefreshList = function () {
        var _this = this;
        this.loading = true;
        this.operatorService.getOperators().subscribe(function (data) {
            _this.operatorsList = data;
            _this.loading = false;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('operatorForm'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__operator_form_operator_form_component__["a" /* OperatorFormComponent */])
    ], OperatorComponent.prototype, "form", void 0);
    OperatorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-operator',
            template: __webpack_require__("../../../../../src/app/layout/operator/operator.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/operator/operator.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__shared_services_OperatorService__["a" /* OperatorService */], __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["g" /* NgbModal */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_OperatorService__["a" /* OperatorService */], __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["g" /* NgbModal */]])
    ], OperatorComponent);
    return OperatorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/operator/operator.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperatorModule", function() { return OperatorModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__operator_routing_module__ = __webpack_require__("../../../../../src/app/layout/operator/operator-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__operator_component__ = __webpack_require__("../../../../../src/app/layout/operator/operator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared___ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__operator_form_operator_form_module__ = __webpack_require__("../../../../../src/app/layout/operator/operator-form/operator-form.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_modules_map_module_map_module__ = __webpack_require__("../../../../../src/app/shared/modules/map-module/map.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var OperatorModule = (function () {
    function OperatorModule() {
    }
    OperatorModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_3__operator_routing_module__["a" /* OperatorRoutingModule */], __WEBPACK_IMPORTED_MODULE_5__shared___["a" /* PageHeaderModule */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */], __WEBPACK_IMPORTED_MODULE_6__operator_form_operator_form_module__["a" /* OperatorFormModule */], __WEBPACK_IMPORTED_MODULE_7__shared_modules_map_module_map_module__["a" /* MapModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__operator_component__["a" /* OperatorComponent */]]
        })
    ], OperatorModule);
    return OperatorModule;
}());



/***/ })

});
//# sourceMappingURL=operator.module.chunk.js.map
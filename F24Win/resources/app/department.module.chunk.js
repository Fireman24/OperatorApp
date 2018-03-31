webpackJsonp(["department.module"],{

/***/ "../../../../../src/app/layout/department/department-form/department-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">{{ 'Department' | translate }}</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"CloseModal();\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n    <div class=\"row\">\r\n        <div class=\"col-xl-6 text-xs-left\">\r\n            <div class=\"form-group\">\r\n                <label for=\"name\">{{ 'Name' | translate }}</label>\r\n                <input class=\"form-control\" id=\"name\" type=\"text\" [(ngModel)]=\"Department.name\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <div class=\"checkbox\">\r\n                    <label>\r\n                        <input id=\"active\" type=\"checkbox\" checked [(ngModel)]=\"Department.active\" > {{'Active' | translate }}\r\n                    </label>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"col-xl-6 text-xs-left\">\r\n            <div class=\"form-group\">\r\n                <label for=\"role\">{{ 'Address' | translate }}</label>\r\n                <input class=\"form-control\" id=\"role\" type=\"text\" [(ngModel)]=\"Department.address\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <button type=\"button\" #putMarkerButton class=\"btn btn-sm btn-secondary\" (click)=\"PutViewMarker();\">\r\n                    {{'Add marker' | translate}}</button>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" style=\"height: 250px; width: 100%;\">\r\n        <div class=\"col-xl-12 text-xs-center\">\r\n            <app-map #map style=\"height: 100%; width: 100%;\" ></app-map>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"CloseModal();\">{{ 'Cancel' | translate }}</button>\r\n    <button type=\"button\" class=\"btn btn-success\" (click)=\"SaveButtonClick();\">{{ 'Save' | translate }}</button>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/department/department-form/department-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DepartmentFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_modules_map_module_map_component__ = __webpack_require__("../../../../../src/app/shared/modules/map-module/map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_modules_map_module_GpsPoint__ = __webpack_require__("../../../../../src/app/shared/modules/map-module/GpsPoint.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_DepartmentService__ = __webpack_require__("../../../../../src/app/shared/services/DepartmentService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_models_Department__ = __webpack_require__("../../../../../src/app/shared/models/Department.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DepartmentFormComponent = (function () {
    function DepartmentFormComponent(modalService, departmentService) {
        this.modalService = modalService;
        this.departmentService = departmentService;
        this._department = new __WEBPACK_IMPORTED_MODULE_5__shared_models_Department__["a" /* Department */]();
        this._editMode = false;
        this.OnClose = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.OnReady = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    DepartmentFormComponent.prototype.ngAfterViewInit = function () {
        this.OnReady.next(null);
    };
    Object.defineProperty(DepartmentFormComponent.prototype, "Department", {
        get: function () {
            return this._department;
        },
        set: function (value) {
            var _this = this;
            if (value == null) {
                return;
            }
            this._department = value;
            // Если карта готова - рисует, если нет, то подписываемся на карту.
            if (this.map.MapReady) {
                this.DrowDepartmentMarker();
            }
            else {
                this.map.OnReady.subscribe(function (e) {
                    _this.DrowDepartmentMarker();
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    DepartmentFormComponent.prototype.DrowDepartmentMarker = function () {
        this.map.RemoveAllMarkers();
        if (this._department.gpsPoint != null) {
            var geo = new __WEBPACK_IMPORTED_MODULE_3__shared_modules_map_module_GpsPoint__["a" /* GpsPoint */](this._department.gpsPoint.lat, this._department.gpsPoint.lon);
            this.map.AddMarker(geo);
            this.map.map.panTo([this._department.gpsPoint.lat, this._department.gpsPoint.lon]);
        }
    };
    DepartmentFormComponent.prototype.SaveButtonClick = function () {
        var _this = this;
        if (this.map.markers.length > 0) {
            var m = this.map.markers[0].getLatLng();
            this._department.gpsPoint = new __WEBPACK_IMPORTED_MODULE_3__shared_modules_map_module_GpsPoint__["a" /* GpsPoint */]();
            this._department.gpsPoint.lon = m.lng;
            this._department.gpsPoint.lat = m.lat;
        }
        if (this._editMode) {
            this.departmentService.updateDepartment(this.Department).subscribe(function (data) {
                _this.Department = data;
                _this.CloseModal();
            }, function (error) { return console.log(error); });
        }
        else {
            this.departmentService.addDepartment(this.Department).subscribe(function (data) {
                _this.Department = data;
                _this.CloseModal();
            }, function (error) { return console.log(error); });
        }
    };
    DepartmentFormComponent.prototype.EditDepartment = function (department) {
        this._editMode = true;
        this.Department = department;
    };
    DepartmentFormComponent.prototype.PutViewMarker = function () {
        var center = this.map.GetCenterLtLn();
        this.map.RemoveAllMarkers();
        this.map.AddMarker(center);
    };
    DepartmentFormComponent.prototype.CloseModal = function () {
        this.modalService.close();
        this.OnClose.next(null);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('content'),
        __metadata("design:type", Object)
    ], DepartmentFormComponent.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__shared_modules_map_module_map_component__["a" /* MapComponent */])
    ], DepartmentFormComponent.prototype, "map", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], DepartmentFormComponent.prototype, "OnClose", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], DepartmentFormComponent.prototype, "OnReady", void 0);
    DepartmentFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-department-form',
            template: __webpack_require__("../../../../../src/app/layout/department/department-form/department-form.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_4__shared_services_DepartmentService__["a" /* DepartmentService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */], __WEBPACK_IMPORTED_MODULE_4__shared_services_DepartmentService__["a" /* DepartmentService */]])
    ], DepartmentFormComponent);
    return DepartmentFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/department/department-form/department-form.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DepartmentFormModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_modules_map_module_map_module__ = __webpack_require__("../../../../../src/app/shared/modules/map-module/map.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__department_form_component__ = __webpack_require__("../../../../../src/app/layout/department/department-form/department-form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var DepartmentFormModule = (function () {
    function DepartmentFormModule() {
    }
    DepartmentFormModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */], __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["h" /* NgbModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_4__shared_modules_map_module_map_module__["a" /* MapModule */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormsModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_6__department_form_component__["a" /* DepartmentFormComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_6__department_form_component__["a" /* DepartmentFormComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_6__department_form_component__["a" /* DepartmentFormComponent */]]
        })
    ], DepartmentFormModule);
    return DepartmentFormModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/department/department-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DepartmentRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__department_component__ = __webpack_require__("../../../../../src/app/layout/department/department.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__department_component__["a" /* DepartmentComponent */]
    }
];
var DepartmentRoutingModule = (function () {
    function DepartmentRoutingModule() {
    }
    DepartmentRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], DepartmentRoutingModule);
    return DepartmentRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/department/department.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <app-page-header [heading]=\"'Departments'  | translate\" [icon]=\"'fa-university'\">\r\n        <button type=\"button\" class=\"btn btn-link\" (click)=\"RefreshList();\">\r\n            <i *ngIf=\"!loading\" style=\"color: grey;\" class=\"fa fa-refresh fa-2x\"></i>\r\n            <i *ngIf=\"loading\" style=\"color: grey;\" class=\"fa fa-spin fa-refresh fa-2x\"></i>\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"AddButtonClick();\">{{ 'Add' | translate }}</button>\r\n    </app-page-header>\r\n    <div class=\"card-body table-responsive\">\r\n        <table class=\"table\">\r\n            <thead>\r\n            <tr>\r\n                <th>{{ 'Name' | translate }}</th>\r\n                <th>{{ 'Address' | translate }}</th>\r\n                <th></th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr *ngFor=\"let dep of departmentList\">\r\n                <td>{{dep.name}}</td>\r\n                <td>{{dep.address}}</td>\r\n                <td>\r\n                    <button type=\"button\" class=\"btn btn-info\" (click)=\"EditButtonClick(dep);\">{{ 'Edit' | translate }}</button>\r\n                    <button *ngIf=\"dep.active\" type=\"button\" class=\"btn btn-danger\" (click)=\"DeactivateButtonClick(dep.id);\">{{ 'Deactivate' | translate }}</button>\r\n                </td>\r\n            </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/department/department.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DepartmentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_DepartmentService__ = __webpack_require__("../../../../../src/app/shared/services/DepartmentService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__department_form_department_form_component__ = __webpack_require__("../../../../../src/app/layout/department/department-form/department-form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DepartmentComponent = (function () {
    function DepartmentComponent(departmentService, modalService) {
        this.departmentService = departmentService;
        this.modalService = modalService;
        this.loading = false;
        this.departmentList = [];
    }
    DepartmentComponent.prototype.ngOnInit = function () {
        this.RefreshList();
    };
    DepartmentComponent.prototype.RefreshList = function () {
        var _this = this;
        this.loading = true;
        this.departmentService.getDepartments().subscribe(function (data) {
            _this.departmentList = data;
            _this.loading = false;
        });
    };
    DepartmentComponent.prototype.AddButtonClick = function () {
        var _this = this;
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_3__department_form_department_form_component__["a" /* DepartmentFormComponent */]);
        var form = modalRef.componentInstance;
        form.OnClose.subscribe(function (e) {
            _this.RefreshList();
        });
    };
    DepartmentComponent.prototype.EditButtonClick = function (dep) {
        var _this = this;
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_3__department_form_department_form_component__["a" /* DepartmentFormComponent */]);
        var form = modalRef.componentInstance;
        form.OnClose.subscribe(function (e) {
            _this.RefreshList();
        });
        form.EditDepartment(dep);
    };
    DepartmentComponent.prototype.DeactivateButtonClick = function (id) {
        var _this = this;
        this.loading = true;
        this.departmentService.deactivateDepartment(id).subscribe(function (data) {
            _this.RefreshList();
        });
    };
    DepartmentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-department',
            template: __webpack_require__("../../../../../src/app/layout/department/department.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__shared_services_DepartmentService__["a" /* DepartmentService */], __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["g" /* NgbModal */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_DepartmentService__["a" /* DepartmentService */], __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["g" /* NgbModal */]])
    ], DepartmentComponent);
    return DepartmentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/department/department.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentModule", function() { return DepartmentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared___ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_modules_map_module_map_module__ = __webpack_require__("../../../../../src/app/shared/modules/map-module/map.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__department_component__ = __webpack_require__("../../../../../src/app/layout/department/department.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__department_routing_module__ = __webpack_require__("../../../../../src/app/layout/department/department-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__department_form_department_form_module__ = __webpack_require__("../../../../../src/app/layout/department/department-form/department-form.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var DepartmentModule = (function () {
    function DepartmentModule() {
    }
    DepartmentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_6__department_routing_module__["a" /* DepartmentRoutingModule */], __WEBPACK_IMPORTED_MODULE_3__shared___["a" /* PageHeaderModule */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */], __WEBPACK_IMPORTED_MODULE_4__shared_modules_map_module_map_module__["a" /* MapModule */], __WEBPACK_IMPORTED_MODULE_7__department_form_department_form_module__["a" /* DepartmentFormModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__department_component__["a" /* DepartmentComponent */]]
        })
    ], DepartmentModule);
    return DepartmentModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/models/Department.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Department; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_map_module_GpsPoint__ = __webpack_require__("../../../../../src/app/shared/modules/map-module/GpsPoint.ts");

var Department = (function () {
    function Department() {
        this.id = 0;
        this.active = true;
        this.gpsPoint = new __WEBPACK_IMPORTED_MODULE_0__modules_map_module_GpsPoint__["a" /* GpsPoint */]();
    }
    return Department;
}());



/***/ })

});
//# sourceMappingURL=department.module.chunk.js.map
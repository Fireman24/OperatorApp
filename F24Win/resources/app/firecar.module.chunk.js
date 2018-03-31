webpackJsonp(["firecar.module"],{

/***/ "../../../../../src/app/layout/firecar/firecar-form/firecar-form.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-template #departmentTemplate let-r=\"result\" let-t=\"term\">\r\n    {{ r.name}}\r\n</ng-template>\r\n\r\n<div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">{{ 'Firecar' | translate }}</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"CloseModal();\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n    <div class=\"row\">\r\n        <div class=\"col-xl-6\">\r\n            <fieldset class=\"form-group\">\r\n                <label>{{ 'Name' | translate }}</label>\r\n                <input class=\"form-control\" [(ngModel)]=\"FireCar.name\">\r\n            </fieldset>\r\n\r\n            <fieldset class=\"form-group\">\r\n                <label>{{ 'Number' | translate }}</label>\r\n                <input class=\"form-control\" [(ngModel)]=\"FireCar.num\">\r\n            </fieldset>\r\n\r\n        </div>\r\n        <div class=\"col-xl-6\">\r\n            <fieldset class=\"form-group\">\r\n                <label for=\"specBox\">{{'Specialization' | translate }}</label>\r\n                <input id=\"specBox\" type=\"text\" class=\"form-control\" [(ngModel)]=\"FireCar.specialization\"\r\n                       [ngbTypeahead]=\"searchSpec\"/>\r\n            </fieldset>\r\n\r\n            <fieldset class=\"form-group\">\r\n                <label for=\"departmentBox\">{{'Department' | translate }}</label>\r\n                <input id=\"departmentBox\" type=\"text\" class=\"form-control\" [(ngModel)]=\"FireCar.department\"\r\n                       [ngbTypeahead]=\"searchDepartment\"\r\n                       [resultTemplate]=\"departmentTemplate\"\r\n                       [inputFormatter]=\"departmentFormatter\"/>\r\n            </fieldset>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-xl-12\">\r\n            <fieldset class=\"form-group\">\r\n                <label>{{ 'Broadcast URL' | translate }}</label>\r\n                <input class=\"form-control\" [(ngModel)]=\"FireCar.broadcast.url\">\r\n            </fieldset>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-xl-4\">\r\n                <label>\r\n                    {{ 'Active' | translate }}\r\n                    <input type=\"checkbox\" checked [(ngModel)]=\"FireCar.active\"/>\r\n                </label>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"CloseModal();\">{{ 'Cancel' | translate }}</button>\r\n    <button type=\"button\" class=\"btn btn-success\" (click)=\"SaveButtonClick();\">{{ 'Save' | translate }}</button>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/firecar/firecar-form/firecar-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FireCarFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_FireCarService__ = __webpack_require__("../../../../../src/app/shared/services/FireCarService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_models_FireCar__ = __webpack_require__("../../../../../src/app/shared/models/FireCar.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_DepartmentService__ = __webpack_require__("../../../../../src/app/shared/services/DepartmentService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// TODO: В идеале сделать получение списка специализаций.
var specializations = ['Автоцистерна', 'Насосно-рукавный', 'Первой помощи', 'С насосом высокого давления', 'Аэродромный',
    'Порошкового тушения', 'Пенного тушения', 'Комбинированного тушения', 'Газового тушения',
    'Насосная станция', 'Газо-водяного тушения', 'Автолестница', 'Автоподъёмник', 'Рукавный',
    'Дымоудаления', 'Газодымозащитной службы', 'Аварийно-спасательный', 'Штабной'];
var FireCarFormComponent = (function () {
    function FireCarFormComponent(modalService, fireCarService, departmentService) {
        var _this = this;
        this.modalService = modalService;
        this.fireCarService = fireCarService;
        this.departmentService = departmentService;
        this._fireCar = new __WEBPACK_IMPORTED_MODULE_3__shared_models_FireCar__["a" /* FireCar */]();
        this._departments = [];
        this._editMode = false;
        this.OnClose = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.OnInit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.searchDepartment = function (text$) {
            return text$
                .map(function (term) { return term === '' ? []
                : _this.DepartmentsList.filter(function (v) { return v.name.toLowerCase().indexOf(term.toLowerCase()) > -1; }).slice(0, 10); });
        };
        this.departmentFormatter = function (x) { return x.name; };
        this.searchSpec = function (text$) {
            return text$
                .map(function (term) { return term === '' ? []
                : specializations.filter(function (v) { return v.toLowerCase().indexOf(term.toLowerCase()) > -1; }).slice(0, 10); });
        };
    }
    Object.defineProperty(FireCarFormComponent.prototype, "EditMode", {
        get: function () {
            return this._editMode;
        },
        enumerable: true,
        configurable: true
    });
    FireCarFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.OnInit.next(null);
        this.departmentService.getDepartments().subscribe(function (data) {
            _this._departments = data;
        });
    };
    Object.defineProperty(FireCarFormComponent.prototype, "FireCar", {
        get: function () {
            return this._fireCar;
        },
        set: function (value) {
            if (value == null) {
                return;
            }
            this._fireCar = value;
            // Если карта готова - рисует, если нет, то подписываемся на карту.
        },
        enumerable: true,
        configurable: true
    });
    FireCarFormComponent.prototype.SaveButtonClick = function () {
        var _this = this;
        if (this._editMode) {
            this.fireCarService.updateFireCar(this.FireCar).subscribe(function (data) {
                _this.FireCar = data;
                _this.CloseModal();
            }, function (error) { return console.log(error); });
        }
        else {
            this.fireCarService.addFireCar(this.FireCar).subscribe(function (data) {
                _this.FireCar = data;
                _this.CloseModal();
            }, function (error) { return console.log(error); });
        }
    };
    FireCarFormComponent.prototype.EditFireCar = function (fireCar) {
        this._editMode = true;
        this.FireCar = fireCar;
    };
    Object.defineProperty(FireCarFormComponent.prototype, "DepartmentsList", {
        get: function () {
            return this._departments;
        },
        enumerable: true,
        configurable: true
    });
    FireCarFormComponent.prototype.CloseModal = function () {
        this.modalService.close();
        this.OnClose.next(null);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], FireCarFormComponent.prototype, "OnClose", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], FireCarFormComponent.prototype, "OnInit", void 0);
    FireCarFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-firecar-form',
            template: __webpack_require__("../../../../../src/app/layout/firecar/firecar-form/firecar-form.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__shared_services_FireCarService__["a" /* FireCarService */], __WEBPACK_IMPORTED_MODULE_4__shared_services_DepartmentService__["a" /* DepartmentService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_FireCarService__["a" /* FireCarService */],
            __WEBPACK_IMPORTED_MODULE_4__shared_services_DepartmentService__["a" /* DepartmentService */]])
    ], FireCarFormComponent);
    return FireCarFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/firecar/firecar-form/firecar-form.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FireCarFormModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__firecar_form_component__ = __webpack_require__("../../../../../src/app/layout/firecar/firecar-form/firecar-form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var FireCarFormModule = (function () {
    function FireCarFormModule() {
    }
    FireCarFormModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */], __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["h" /* NgbModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormsModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__firecar_form_component__["a" /* FireCarFormComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_5__firecar_form_component__["a" /* FireCarFormComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_5__firecar_form_component__["a" /* FireCarFormComponent */]]
        })
    ], FireCarFormModule);
    return FireCarFormModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/firecar/firecar-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FireCarRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__firecar_component__ = __webpack_require__("../../../../../src/app/layout/firecar/firecar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__firecar_component__["a" /* FireCarComponent */]
    }
];
var FireCarRoutingModule = (function () {
    function FireCarRoutingModule() {
    }
    FireCarRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], FireCarRoutingModule);
    return FireCarRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/firecar/firecar.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <app-page-header [heading]=\"'Firecars'  | translate\" [icon]=\"'fa-truck'\">\r\n        <button type=\"button\" class=\"btn btn-link\" (click)=\"RefreshList();\">\r\n            <i *ngIf=\"!loading\" style=\"color: grey;\" class=\"fa fa-refresh fa-2x\"></i>\r\n            <i *ngIf=\"loading\" style=\"color: grey;\" class=\"fa fa-spin fa-refresh fa-2x\"></i>\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"AddButtonClick();\">{{ 'Add' | translate }}</button>\r\n    </app-page-header>\r\n    <div class=\"card-body table-responsive\">\r\n        <table class=\"table\">\r\n            <thead>\r\n            <tr>\r\n                <th>{{ 'Id' | translate }}</th>\r\n                <th>{{ 'Name' | translate }}</th>\r\n                <th>{{ 'Number' | translate }}</th>\r\n                <th>{{ 'Specialization' | translate }}</th>\r\n                <th></th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr *ngFor=\"let car of fireCarsList\">\r\n                <td>{{car.id}}</td>\r\n                <td>{{car.name}}</td>\r\n                <td>{{car.num}}</td>\r\n                <td>{{car.specialization}}</td>\r\n                <td>\r\n                    <button type=\"button\" class=\"btn btn-info\" (click)=\"EditButtonClick(car);\">{{ 'Edit' | translate }}</button>\r\n                </td>\r\n            </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/firecar/firecar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FireCarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_FireCarService__ = __webpack_require__("../../../../../src/app/shared/services/FireCarService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__firecar_form_firecar_form_component__ = __webpack_require__("../../../../../src/app/layout/firecar/firecar-form/firecar-form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FireCarComponent = (function () {
    function FireCarComponent(fireCarService, modalService) {
        this.fireCarService = fireCarService;
        this.modalService = modalService;
        this.loading = false;
        this.fireCarsList = [];
    }
    FireCarComponent.prototype.ngOnInit = function () {
        this.RefreshList();
    };
    FireCarComponent.prototype.RefreshList = function () {
        var _this = this;
        this.loading = true;
        this.fireCarService.getFireCars().subscribe(function (data) {
            _this.fireCarsList = data;
            _this.loading = false;
        });
    };
    FireCarComponent.prototype.AddButtonClick = function () {
        var _this = this;
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_3__firecar_form_firecar_form_component__["a" /* FireCarFormComponent */]);
        var form = modalRef.componentInstance;
        form.OnClose.subscribe(function (e) {
            _this.RefreshList();
        });
    };
    FireCarComponent.prototype.EditButtonClick = function (car) {
        var _this = this;
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_3__firecar_form_firecar_form_component__["a" /* FireCarFormComponent */]);
        var form = modalRef.componentInstance;
        form.OnClose.subscribe(function (e) {
            _this.RefreshList();
        });
        form.EditFireCar(car);
    };
    FireCarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-firecar',
            template: __webpack_require__("../../../../../src/app/layout/firecar/firecar.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__shared_services_FireCarService__["a" /* FireCarService */], __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["g" /* NgbModal */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_FireCarService__["a" /* FireCarService */], __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["g" /* NgbModal */]])
    ], FireCarComponent);
    return FireCarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/firecar/firecar.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FireCarModule", function() { return FireCarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared___ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__firecar_component__ = __webpack_require__("../../../../../src/app/layout/firecar/firecar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__firecar_form_firecar_form_module__ = __webpack_require__("../../../../../src/app/layout/firecar/firecar-form/firecar-form.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__firecar_routing_module__ = __webpack_require__("../../../../../src/app/layout/firecar/firecar-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var FireCarModule = (function () {
    function FireCarModule() {
    }
    FireCarModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_6__firecar_routing_module__["a" /* FireCarRoutingModule */], __WEBPACK_IMPORTED_MODULE_3__shared___["a" /* PageHeaderModule */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */], __WEBPACK_IMPORTED_MODULE_5__firecar_form_firecar_form_module__["a" /* FireCarFormModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__firecar_component__["a" /* FireCarComponent */]]
        })
    ], FireCarModule);
    return FireCarModule;
}());



/***/ })

});
//# sourceMappingURL=firecar.module.chunk.js.map
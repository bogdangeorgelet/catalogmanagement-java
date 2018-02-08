webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    {
        path: '',
        children: []
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <div class=\"header-container\">\n    <div class=\"left-col\">\n      <img src=\"./assets/images/logo.png\" />\n    </div>\n    <div class=\"right-col\">\n      <a routerLink=\"app-user-login\">User Login</a>\n      <a routerLink=\"app-main-page\">Main Page</a>\n      <a routerLink=\"\">About Us</a>\n      <a routerLink=\"\">Contact Us</a>\n    </div>\n    <router-outlet></router-outlet>\n  </div>\n  <div class=\"main-content-container\">\n    <div></div>\n    <div>\n      <div class=\"main-content-section\">\n        <div>\n          <h1>{{title}}</h1>\n        </div>\n      </div>\n      <div></div>\n    </div>\n    <div class=\"footer-container\">\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".contentRows:hover {\n  background-color: #53575e; }\n\n.blurred {\n  -webkit-filter: blur(5px);\n          filter: blur(5px); }\n\n.employeeModal {\n  width: 20%;\n  height: 20%;\n  background-color: white;\n  position: absolute;\n  left: 25%;\n  top: 25%;\n  z-index: 999;\n  border-radius: 25px;\n  border: solid 1px #aaa; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_merge__ = __webpack_require__("../../../../rxjs/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppComponent = (function () {
    function AppComponent() {
        this.title = "Welcome to Catalxog Management Application";
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_cdk_table__ = __webpack_require__("../../../cdk/@angular/cdk/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__user_login_user_login_component__ = __webpack_require__("../../../../../src/app/user-login/user-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__main_page_main_page_component__ = __webpack_require__("../../../../../src/app/main-page/main-page.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__user_login_user_login_component__["a" /* UserLoginComponent */],
            __WEBPACK_IMPORTED_MODULE_12__main_page_main_page_component__["a" /* MainPageComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MdTableModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_cdk_table__["a" /* CdkTableModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_forms__["a" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_router__["a" /* RouterModule */].forRoot([
                {
                    path: '',
                    component: __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
                },
                {
                    path: 'app-user-login',
                    component: __WEBPACK_IMPORTED_MODULE_10__user_login_user_login_component__["a" /* UserLoginComponent */]
                },
                {
                    path: 'app-main-page',
                    component: __WEBPACK_IMPORTED_MODULE_12__main_page_main_page_component__["a" /* MainPageComponent */]
                }
            ]),
            __WEBPACK_IMPORTED_MODULE_9__angular_forms__["b" /* FormsModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/main-page/main-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngClass]='classes'><h1 style='text-align: center; padding: 20px;'>All employees</h1>\n  <div style='text-align: center; padding-bottom: 20px'>\n    <button type=\"button\" class=\"btn btn-primary\" (click)='openAddBox()'>Add employee</button>\n    <button type=\"button\" class=\"btn btn-success\" (click)='refreshList();$event.target.blur()'>Refresh list</button>\n  </div>\n  <router-outlet></router-outlet>\n  <div class='mat-elevation-z8' style='margin: 0 10% 0 10%'>\n    <table class=\"table table-inverse\">\n      <thead>\n      <tr>\n        <th>First Name</th>\n        <th>Last Name</th>\n        <th>Age</th>\n        <th>Years</th>\n        <th>Department</th>\n        <th>Used Tehnology</th>\n        <th>Company name</th>\n        <th>Delete</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr class='contentRows' *ngFor='let employee of employees' (click)='openEditBox(employee)'>\n        <td>{{employee.firstName}}</td>\n        <td>{{employee.lastName}}</td>\n        <td>{{employee.age}}</td>\n        <td>{{employee.years}}</td>\n        <td>{{employee.department}}</td>\n        <td>{{employee.usedTechnology}}</td>\n        <td>{{employee.companyEntity.name}}</td>\n        <td><button type=\"button\" class=\"btn btn-danger\" (click)='deleteEmployeeDirect(modalEmployee.id)'>Delete</button></td>\n      </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n\n<div class='employeeModal' *ngIf='showEditBox'>\n  <div class='row' style='padding-top: 5%'>\n    <div class='col-2'></div>\n    <div class='col-8'>\n      <div class=\"row\" style='display: block'>\n        <div class=\"container\">\n          <form autocomplete=\"off\" spellcheck=\"false\">\n            <div class=\"form-group\">\n              <label for=\"formGroupExampleInput2\">First name</label>\n              <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput2\" [(ngModel)]='modalEmployee.firstName' name='firstName'>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"formGroupExampleInput3\">Last name</label>\n              <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput3\" [(ngModel)]='modalEmployee.lastName' name='lastName'>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"formGroupExampleInput4\">Age</label>\n              <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput4\" [(ngModel)]='modalEmployee.age'\n                     name='age'>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"formGroupExampleInput5\">Years in the company</label>\n              <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput5\" [(ngModel)]='modalEmployee.years'\n                     name='years'>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"formGroupExampleInput6\">Department</label>\n              <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput6\" [(ngModel)]='modalEmployee.department'\n                     name='department'>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"formGroupExampleInput7\">Used technology</label>\n              <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput7\" [(ngModel)]='modalEmployee.usedTechnology'\n                     name='usedTechnology'>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"formGroupExampleInput8\">Company</label>\n              <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput8\" [(ngModel)]='modalEmployee.companyEntity.name'\n                     name='company'>\n            </div>\n            <div class='row text-center pt-4'>\n              <div class='col-4'>\n                <button type=\"button\" class=\"btn btn-primary\" (click)='updateEmployee(modalEmployee.id, modalEmployee)'>Apply changes\n                </button>\n              </div>\n              <div class='col-4'>\n                <button type=\"button\" class=\"btn btn-success\" (click)='closeEditBox()'>Cancel</button>\n              </div>\n              <div class='col-4'>\n                <button type=\"button\" class=\"btn btn-danger\" (click)='deleteEmployee(modalEmployee.id)'>Delete employee</button>\n              </div>\n            </div>\n            <div class='row text-center pt-3'>\n            </div>\n          </form>\n\n        </div>\n      </div>\n    </div>\n    <div class='col-2'></div>\n\n  </div>\n</div>\n\n<div class='employeeModal' *ngIf='showAddBox'>\n  <div class='row' style='padding-top: 5%'>\n    <div class='col-2'></div>\n    <div class='col-8'>\n      <div class=\"row\" style='display: block'>\n        <div class=\"container\">\n          <form autocomplete=\"off\" spellcheck=\"false\">\n            <div class=\"form-group\">\n              <label for=\"formGroupExampleInput2\">First name</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]='modalEmployee.firstName' name='firstName'>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"formGroupExampleInput3\">Last name</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]='modalEmployee.lastName' name='lastName'>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"formGroupExampleInput4\">Age</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]='modalEmployee.age' name='age'>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"formGroupExampleInput5\">Years in the company</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]='modalEmployee.years' name='years'>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"formGroupExampleInput6\">Department</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]='modalEmployee.department' name='department'>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"formGroupExampleInput7\">Used Technology</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]='modalEmployee.usedTechnology' name='usedTechnology'>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"formGroupExampleInput8\">Company name</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]='modalEmployee.companyEntity.name' name='company'>\n            </div>\n            <div class='row text-center pt-4'>\n              <div class='col-6'>\n                <button type=\"button\" class=\"btn btn-primary\" (click)='addEmployee()'>Add employee</button>\n              </div>\n              <div class='col-6'>\n                <button type=\"button\" class=\"btn btn-success\" (click)='closeAddBox()'>Cancel</button>\n              </div>\n            </div>\n            <div class='row text-center pt-3'>\n            </div>\n          </form>\n\n          <div *ngIf='error' class='text-center'>\n            <p>\n              <ngb-alert type='danger' [dismissible]=\"true\" (close)=\"closeAlert()\">\n                <strong>Error!</strong> {{errorMessage}}\n              </ngb-alert>\n            </p>\n\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class='col-2'></div>\n\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/main-page/main-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main-page/main-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainPageComponent = (function () {
    function MainPageComponent(http) {
        this.http = http;
        this.hostUrl = 'http://localhost:8080/employee';
        this.showEditBox = false;
        this.showAddBox = false;
        this.modalEmployee = { id: '', firstName: '', lastName: '', age: '', years: '', department: '', usedTechnology: '', companyEntity: { id: '', name: '' } };
        this.error = false;
    }
    MainPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        var url = this.hostUrl + "/list";
        // Make the HTTP request:
        this.http.get(url).subscribe(function (data) {
            // Read the result field from the JSON response.
            _this.employees = data;
        });
    };
    MainPageComponent.prototype.openEditBox = function (employee) {
        this.showEditBox = true;
        this.classes = 'blurred';
        this.modalEmployee.id = employee.id;
        this.modalEmployee.firstName = employee.firstName;
        this.modalEmployee.lastName = employee.lastName;
        this.modalEmployee.age = employee.age;
        this.modalEmployee.years = employee.years;
        this.modalEmployee.department = employee.department;
        this.modalEmployee.usedTechnology = employee.usedTechnology;
        this.modalEmployee.companyEntity.name = employee.companyEntity.name;
    };
    MainPageComponent.prototype.openAddBox = function () {
        this.error = false;
        this.showAddBox = true;
        this.classes = 'blurred';
        this.modalEmployee.id = '';
        this.modalEmployee.firstName = '';
        this.modalEmployee.lastName = '';
        this.modalEmployee.age = '';
        this.modalEmployee.years = '';
        this.modalEmployee.department = '';
        this.modalEmployee.usedTechnology = '';
        this.modalEmployee.companyEntity.id = '';
        this.modalEmployee.companyEntity.name = '';
    };
    MainPageComponent.prototype.closeEditBox = function () {
        this.showEditBox = false;
        this.classes = '';
    };
    MainPageComponent.prototype.addEmployee = function () {
        var _this = this;
        var url = this.hostUrl + "/add";
        this.error = false;
        var body = this.modalEmployee;
        this.http.post(url, body).subscribe(function (data) {
            _this.closeAddBox();
            _this.refreshList();
        }, function (err) {
            _this.error = true;
            _this.errorMessage = err.error.message;
        });
    };
    MainPageComponent.prototype.updateEmployee = function (id, updatedEmployee) {
        var _this = this;
        var body = {
            'id': id,
            'firstName': updatedEmployee.firstName,
            'lastName': updatedEmployee.lastName,
            'age': updatedEmployee.age,
            'years': updatedEmployee.years,
            'department': updatedEmployee.department,
            'usedTechnology': updatedEmployee.usedTechnology,
            'companyEntity': {
                'id': 1,
                'name': 'Fortech'
            }
        };
        this.http.put(this.hostUrl + id, body).subscribe(function (data) {
            _this.closeEditBox();
            _this.refreshList();
        });
    };
    MainPageComponent.prototype.deleteEmployee = function (id) {
        var _this = this;
        this.http.delete(this.hostUrl + id).subscribe(function (data) {
            _this.closeEditBox();
            _this.refreshList();
        });
    };
    MainPageComponent.prototype.deleteEmployeeDirect = function (id) {
        var _this = this;
        this.http.delete(this.hostUrl + id).subscribe(function (data) {
            _this.refreshList();
        });
    };
    MainPageComponent.prototype.refreshList = function () {
        var _this = this;
        this.http.get(this.hostUrl).subscribe(function (data) {
            // Read the result field from the JSON response.
            _this.employees = data;
        });
    };
    MainPageComponent.prototype.closeAddBox = function () {
        this.error = false;
        this.showAddBox = false;
        this.classes = '';
    };
    MainPageComponent.prototype.closeAlert = function () {
        this.error = false;
    };
    return MainPageComponent;
}());
MainPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-main-page',
        template: __webpack_require__("../../../../../src/app/main-page/main-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main-page/main-page.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], MainPageComponent);

var _a;
//# sourceMappingURL=main-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/user-login/user-login.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <form [formGroup]=\"formdata\" (ngSubmit) = \"onClickSubmit(formdata.value)\" >\n       <header>Login</header>\n       <label>Username <span>*</span></label>\n       <input type=\"text\" name=\"uname\" formControlName=\"uname\" placeholder=\"At least 6 characters\"/>\n       \n       <label>Password <span>*</span></label>\n       <input type=\"password\" class=\"fortextbox\" name=\"passwd\" formControlName=\"passwd\"/>\n       \n       <div class=\"help\">Use upper and lowercase lettes as well</div>\n       <button [disabled]=\"!formdata.valid\" value=\"Login\">Login</button>\n    </form>\n </div>"

/***/ }),

/***/ "../../../../../src/app/user-login/user-login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-login/user-login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserLoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserLoginComponent = (function () {
    function UserLoginComponent(router) {
        this.router = router;
    }
    UserLoginComponent.prototype.ngOnInit = function () {
        this.formdata = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* FormGroup */]({
            uname: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].minLength(6)
            ])),
            passwd: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* FormControl */]("", this.passwordValidation)
        });
    };
    UserLoginComponent.prototype.passwordValidation = function (formcontrol) {
        if (formcontrol.value.length < 5) {
            return { "passwd": true };
        }
    };
    UserLoginComponent.prototype.onClickSubmit = function (data) {
        console.log(data.uname);
        if (data.uname === "systemadmin" && data.passwd == "admin123") {
            alert("Login Successful");
            this.router.navigate(['app-main-page']);
        }
        else {
            alert("Invalid Login");
            return false;
        }
    };
    return UserLoginComponent;
}());
UserLoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-user-login',
        template: __webpack_require__("../../../../../src/app/user-login/user-login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user-login/user-login.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], UserLoginComponent);

var _a;
//# sourceMappingURL=user-login.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
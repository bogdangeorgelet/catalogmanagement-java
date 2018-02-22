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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__welcome_page_welcome_page_component__ = __webpack_require__("../../../../../src/app/welcome-page/welcome-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_login_user_login_component__ = __webpack_require__("../../../../../src/app/user-login/user-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__main_page_main_page_component__ = __webpack_require__("../../../../../src/app/main-page/main-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
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
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__["a" /* DashboardComponent */]
    },
    {
        path: 'app-welcome-page',
        component: __WEBPACK_IMPORTED_MODULE_2__welcome_page_welcome_page_component__["a" /* WelcomePageComponent */]
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'app-user-login',
        component: __WEBPACK_IMPORTED_MODULE_3__user_login_user_login_component__["a" /* UserLoginComponent */]
    },
    {
        path: 'app-main-page',
        component: __WEBPACK_IMPORTED_MODULE_4__main_page_main_page_component__["a" /* MainPageComponent */]
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

/***/ "../../../../../src/app/app-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppService = (function () {
    function AppService(http) {
        this.http = http;
        this.authenticated = false;
    }
    AppService.prototype.authenticate = function (credentials, callback) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpHeaders */](credentials ? {
            authorization: 'Basic' + btoa(credentials.username + ':' + credentials.password)
        } : {});
        this.http.get('http://localhost:8080/resource', { headers: headers })
            .subscribe(function (response) {
            if (response['name']) {
                _this.authenticated = true;
            }
            else {
                _this.authenticated = false;
            }
            return callback & callback();
        });
    };
    return AppService;
}());
AppService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpClient */]) === "function" && _a || Object])
], AppService);

var _a;
//# sourceMappingURL=app-service.service.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <div class=\"header-container\">\n    <div class=\"left-col\">\n      <img src=\"./assets/images/logo.png\" />\n    </div>\n    <div class=\"right-col\">\n      <a routerLinkActive=\"active\" routerLink=\"/home\">Home</a>\n      <a routerLinkActive=\"active\" routerLink=\"/login\">Login</a>\n      <a (click)=\"logout()\">Logout</a>\n      <a routerLink=\"app-welcome-page\">Home</a>\n      <a routerLink=\"app-user-login\">User Login</a>\n      <a routerLink=\"app-main-page\">Main Page</a>\n      <a routerLink=\"dashboard\">Dashboard</a>\n      <a routerLink=\"\">About Us</a>\n      <a routerLink=\"\">Contact Us</a>\n    </div>\n    <router-outlet></router-outlet>\n  </div>\n  <!-- <div class=\"main-content-container\">\n    <div></div>\n    <div>\n      <div class=\"main-content-section\">\n        <div>\n          <h1>{{title}}</h1>\n        </div>\n      </div>\n      <div></div>\n    </div>\n    <div class=\"footer-container\">\n    </div>\n  </div> -->\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content p {\n  text-align: center;\n  color: black; }\n\n.header-container {\n  width: 100%;\n  font-size: 17px;\n  position: fixed;\n  z-index: 9999;\n  padding-top: 15px;\n  float: left; }\n\n.left-col {\n  width: 50%;\n  float: left;\n  padding-left: 25px; }\n\n.right-col {\n  width: 50%;\n  float: right;\n  padding-top: 15px; }\n\n.right-col a {\n  padding: 15px; }\n\n.main-content-container {\n  position: relative;\n  background-color: #fff;\n  width: 100%;\n  float: left; }\n\n.footer-container {\n  width: 100%;\n  float: left; }\n\n.main-content-section {\n  position: relative;\n  float: right;\n  width: 62%;\n  top: 300px; }\n", ""]);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_finally__ = __webpack_require__("../../../../rxjs/add/operator/finally.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_finally___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_finally__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_service_service__ = __webpack_require__("../../../../../src/app/app-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AppComponent = (function () {
    function AppComponent(app, http, router) {
        this.app = app;
        this.http = http;
        this.router = router;
    }
    AppComponent.prototype.logout = function () {
        var _this = this;
        this.http.post('http://localhost:8080/logout', {}).finally(function () {
            _this.app.authenticated = false;
            _this.router.navigateByUrl("/login");
        }).subscribe();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__app_service_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__app_service_service__["a" /* AppService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpClient */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* Router */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service_service__ = __webpack_require__("../../../../../src/app/app-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_cdk_table__ = __webpack_require__("../../../cdk/@angular/cdk/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__user_login_user_login_component__ = __webpack_require__("../../../../../src/app/user-login/user-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__main_page_main_page_component__ = __webpack_require__("../../../../../src/app/main-page/main-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__welcome_page_welcome_page_component__ = __webpack_require__("../../../../../src/app/welcome-page/welcome-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
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
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_11__user_login_user_login_component__["a" /* UserLoginComponent */],
            __WEBPACK_IMPORTED_MODULE_12__main_page_main_page_component__["a" /* MainPageComponent */],
            __WEBPACK_IMPORTED_MODULE_13__welcome_page_welcome_page_component__["a" /* WelcomePageComponent */],
            __WEBPACK_IMPORTED_MODULE_14__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_15__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_16__home_home_component__["a" /* HomeComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MdTableModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_cdk_table__["a" /* CdkTableModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_forms__["a" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */],
            __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_forms__["b" /* FormsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_2__app_service_service__["a" /* AppService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='mat-elevation-z8 dashboard'>\n  <div class=\"header\">\n    <h3 class=\"header-title\">List of employees</h3>  \n  </div>\n  <table class=\"table table-inverse dashboard-table\">\n    <thead>\n    <tr>\n      <th>First Name</th>\n      <th>Last Name</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr class='contentRows' *ngFor='let employee of employees' (click)=\"openInfoBox(employee)\">\n      <td>{{employee.firstName}}</td>\n      <td>{{employee.lastName}}</td>\n    </tr>\n    </tbody>\n  </table>\n</div>\n\n<div class='dashboardModal' *ngIf='showEmployeeInfo'>\n  <div class='row' style='padding-top: 5%'>\n    <div class='col-2'></div>\n    <div class='col-8'>\n      <div class=\"row\" style='display: block'>\n        <div class=\"container\">\n          <form autocomplete=\"off\" spellcheck=\"false\">\n            <div class=\"form-group\">\n              <label for=\"formGroupExampleInput2\">First name</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]='modalEmployee.firstName' name='firstName'>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"formGroupExampleInput3\">Last name</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]='modalEmployee.lastName' name='lastName'>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"formGroupExampleInput4\">Age</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]='modalEmployee.age' name='age'>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"formGroupExampleInput5\">Years in the company</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]='modalEmployee.years' name='years'>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"formGroupExampleInput6\">Department</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]='modalEmployee.department' name='department'>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"formGroupExampleInput7\">Used Technology</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]='modalEmployee.usedTechnology' name='usedTechnology'>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"formGroupExampleInput8\">Company name</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]='modalEmployee.companyEntity.name' name='company'>\n            </div>\n            <div class='row text-center pt-3'>\n            </div>\n            <div class='row text-center pt-4'>\n              <div class='col-2'>\n                <button type=\"button\" class=\"btn btn-success\" (click)='closeInfoBox()'>Close</button>\n              </div>\n              </div>\n          </form>\n\n          <div *ngIf='error' class='text-center'>\n            <p>\n              <ngb-alert type='danger' [dismissible]=\"true\" (close)=\"closeAlert()\">\n                <strong>Error!</strong> {{errorMessage}}\n              </ngb-alert>\n            </p>\n\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class='col-2'></div>\n\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dashboard {\n  position: relative;\n  margin: 3% 10% 0 10%; }\n\n.header-title {\n  position: absolute;\n  margin-top: 146px;\n  left: -10%; }\n\n.dashboard-table {\n  width: 50% !important;\n  color: #fff;\n  background-color: #292b2c;\n  position: absolute;\n  left: -10%;\n  float: left;\n  margin-top: 200px; }\n\n.contentRows:hover {\n  background-color: #53575e; }\n\n.blurred {\n  -webkit-filter: blur(5px);\n          filter: blur(5px); }\n\n.dashboardModal {\n  width: 40%;\n  background-color: white;\n  position: absolute;\n  left: 25%;\n  top: 42%;\n  z-index: 999;\n  border-radius: 25px;\n  border: solid 1px #aaa; }\n\n.dashboardModal .btn-success {\n  margin-bottom: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(http) {
        this.http = http;
        this.showEmployeeInfo = false;
        this.modalEmployee = { id: '', firstName: '', lastName: '', age: '', years: '', department: '', usedTechnology: '', companyEntity: { id: '', name: '' } };
        this.error = false;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('http://localhost:8080/employee/list').subscribe(function (data) {
            _this.employees = data;
        });
    };
    DashboardComponent.prototype.openInfoBox = function (employee) {
        console.log(employee.lastName);
        this.showEmployeeInfo = true;
        this.classes = 'blurred';
        this.modalEmployee.firstName = employee.firstName;
        this.modalEmployee.lastName = employee.lastName;
        this.modalEmployee.age = employee.age;
        this.modalEmployee.years = employee.years;
        this.modalEmployee.department = employee.department;
        this.modalEmployee.usedTechnology = employee.usedTechnology;
        this.modalEmployee.companyEntity.name = employee.companyEntity.name;
    };
    DashboardComponent.prototype.closeInfoBox = function () {
        this.showEmployeeInfo = false;
        this.classes = '';
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpClient */]) === "function" && _a || Object])
], DashboardComponent);

var _a;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service_service__ = __webpack_require__("../../../../../src/app/app-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(app, http) {
        var _this = this;
        this.app = app;
        this.http = http;
        this.title = 'Demo';
        this.greeting = {};
        http.get('http://localhost:8080/resource').subscribe(function (data) {
            _this.greeting = data;
        });
    }
    HomeComponent.prototype.authenticated = function () {
        return this.app.authenticated;
    };
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service_service__["a" /* AppService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpClient */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-danger\" [hidden]=\"!error\">\n  There was a problem logging in. Please try again.\n</div>\n<form role=\"form\" (submit)=\"login()\">\n  <div class=\"form-group\">\n    <label for=\"username\">Username:</label>\n    <input type=\"text\" class=\"form-control\" id=\"username\" name=\"username\" />\n  </div>\n  <div class=\"form-group\">\n    <label for=\"password\">Password: </label>\n    <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" />\n  </div>\n  <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n</form>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service_service__ = __webpack_require__("../../../../../src/app/app-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(app, http, router) {
        this.app = app;
        this.http = http;
        this.router = router;
        this.credentials = { username: '', password: '' };
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.app.authenticate(this.credentials, function () {
            _this.router.navigateByUrl('/home');
        });
        return false;
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service_service__["a" /* AppService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpClient */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/main-page/main-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngClass]='classes'>\n  <h1 class=\"main-page-title\">All employees</h1>\n  <div style='text-align: center; padding-bottom: 20px'>\n    <button type=\"button\" class=\"btn btn-primary\" (click)='openAddBox()'>Add employee</button>\n    <button type=\"button\" class=\"btn btn-success\" (click)='refreshList();$event.target.blur()'>Refresh list</button>\n  </div>\n  <div class='mat-elevation-z8' style='margin: 0 10% 0 10%'>\n    <table class=\"table table-inverse\">\n      <thead>\n      <tr>\n        <th>First Name</th>\n        <th>Last Name</th>\n        <th>Age</th>\n        <th>Years</th>\n        <th>Department</th>\n        <th>Used Tehnology</th>\n        <th>Company name</th>\n        <th>Delete</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr class='contentRows' *ngFor='let employee of employees' (click)='openEditBox(employee)'>\n        <td>{{employee.firstName}}</td>\n        <td>{{employee.lastName}}</td>\n        <td>{{employee.age}}</td>\n        <td>{{employee.years}}</td>\n        <td>{{employee.department}}</td>\n        <td>{{employee.usedTechnology}}</td>\n        <td>{{employee.companyEntity.name}}</td>\n        <td><button type=\"button\" class=\"btn btn-danger\" (click)='deleteEmployeeDirect(modalEmployee.id)'>Delete</button></td>\n      </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n\n<div class='employeeModal' *ngIf='showEditBox'>\n  <div class='row' style='padding-top: 5%'>\n    <div class='col-2'></div>\n    <div class='col-8'>\n      <div class=\"row\" style='display: block'>\n        <div class=\"container\">\n          <form autocomplete=\"off\" spellcheck=\"false\">\n            <div class=\"form-group\">\n              <label for=\"formGroupExampleInput2\">First name</label>\n              <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput2\" [(ngModel)]='modalEmployee.firstName' name='firstName'>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"formGroupExampleInput3\">Last name</label>\n              <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput3\" [(ngModel)]='modalEmployee.lastName' name='lastName'>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"formGroupExampleInput4\">Age</label>\n              <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput4\" [(ngModel)]='modalEmployee.age'\n                     name='age'>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"formGroupExampleInput5\">Years in the company</label>\n              <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput5\" [(ngModel)]='modalEmployee.years'\n                     name='years'>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"formGroupExampleInput6\">Department</label>\n              <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput6\" [(ngModel)]='modalEmployee.department'\n                     name='department'>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"formGroupExampleInput7\">Used technology</label>\n              <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput7\" [(ngModel)]='modalEmployee.usedTechnology'\n                     name='usedTechnology'>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"formGroupExampleInput8\">Company</label>\n              <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput8\" [(ngModel)]='modalEmployee.companyEntity.name'\n                     name='company'>\n            </div>\n            <div class='row text-center pt-4'>\n              <div class='col-4'>\n                <button type=\"button\" class=\"btn btn-primary\" (click)='updateEmployee(modalEmployee.id, modalEmployee)'>Apply changes\n                </button>\n              </div>\n              <div class='col-4'>\n                <button type=\"button\" class=\"btn btn-success\" (click)='closeEditBox()'>Cancel</button>\n              </div>\n              <div class='col-4'>\n                <button type=\"button\" class=\"btn btn-danger\" (click)='deleteEmployee(modalEmployee.id)'>Delete employee</button>\n              </div>\n            </div>\n            <div class='row text-center pt-3'>\n            </div>\n          </form>\n\n        </div>\n      </div>\n    </div>\n    <div class='col-2'></div>\n\n  </div>\n</div>\n\n<div class='employeeModal' *ngIf='showAddBox'>\n  <div class='row' style='padding-top: 5%'>\n    <div class='col-2'></div>\n    <div class='col-8'>\n      <div class=\"row\" style='display: block'>\n        <div class=\"container\">\n          <form autocomplete=\"off\" spellcheck=\"false\">\n            <div class=\"form-group\">\n              <label for=\"formGroupExampleInput2\">First name</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]='modalEmployee.firstName' name='firstName'>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"formGroupExampleInput3\">Last name</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]='modalEmployee.lastName' name='lastName'>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"formGroupExampleInput4\">Age</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]='modalEmployee.age' name='age'>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"formGroupExampleInput5\">Years in the company</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]='modalEmployee.years' name='years'>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"formGroupExampleInput6\">Department</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]='modalEmployee.department' name='department'>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"formGroupExampleInput7\">Used Technology</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]='modalEmployee.usedTechnology' name='usedTechnology'>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"formGroupExampleInput8\">Company name</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]='modalEmployee.companyEntity.name' name='company'>\n            </div>\n            <div class='row text-center pt-4'>\n              <div class='col-6'>\n                <button type=\"button\" class=\"btn btn-primary\" (click)='addEmployee()'>Add employee</button>\n              </div>\n              <div class='col-6'>\n                <button type=\"button\" class=\"btn btn-success\" (click)='closeAddBox()'>Cancel</button>\n              </div>\n            </div>\n            <div class='row text-center pt-3'>\n            </div>\n          </form>\n\n          <div *ngIf='error' class='text-center'>\n            <p>\n              <ngb-alert type='danger' [dismissible]=\"true\" (close)=\"closeAlert()\">\n                <strong>Error!</strong> {{errorMessage}}\n              </ngb-alert>\n            </p>\n\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class='col-2'></div>\n\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/main-page/main-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-page-title {\n  text-align: center;\n  margin: 128px 180px 18px 170px; }\n\n.contentRows:hover {\n  background-color: #53575e; }\n\n.blurred {\n  -webkit-filter: blur(5px);\n          filter: blur(5px); }\n\n.employeeModal {\n  width: 50%;\n  height: 100%;\n  background-color: white;\n  position: absolute;\n  left: 25%;\n  top: 10%;\n  z-index: 999;\n  border-radius: 25px;\n  border: solid 1px #aaa; }\n", ""]);

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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-main-page',
        template: __webpack_require__("../../../../../src/app/main-page/main-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main-page/main-page.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpClient */]) === "function" && _a || Object])
], MainPageComponent);

var _a;
//# sourceMappingURL=main-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/user-login/user-login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-container\">\n    <form [formGroup]=\"formdata\" (ngSubmit) = \"onClickSubmit(formdata.value)\" >\n       <header>Login</header>\n       <label>Username <span>*</span></label>\n       <input type=\"text\" name=\"uname\" formControlName=\"uname\" placeholder=\"At least 6 characters\"/>\n       \n       <div class=\"help\">At least 6 characters</div>\n       <label>Password <span>*</span></label>\n       <input type=\"password\" class=\"fortextbox\" name=\"passwd\" formControlName=\"passwd\"/>\n       \n       <div class=\"help\">Use upper and lowercase lettes as well</div>\n       <button [disabled]=\"!formdata.valid\" value=\"Login\">Login</button>\n    </form>\n </div>"

/***/ }),

/***/ "../../../../../src/app/user-login/user-login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-container {\n  width: 1000px;\n  position: relative; }\n\nform {\n  background: white;\n  width: 500px;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.7);\n  font-family: lato;\n  color: #333;\n  height: 420px;\n  border-radius: 10px;\n  position: absolute;\n  right: -20%;\n  margin-top: 105px; }\n\nform header {\n  background: #FF3838;\n  padding: 30px 20px;\n  color: white;\n  font-size: 1.2em;\n  font-weight: 600;\n  border-radius: 10px 10px 0 0; }\n\nform label {\n  margin-left: 20px;\n  display: inline-block;\n  margin-top: 30px;\n  margin-bottom: 5px;\n  position: relative; }\n\nform label span {\n  color: #FF3838;\n  font-size: 2em;\n  position: absolute;\n  left: 2.3em;\n  top: -10px; }\n\nform input {\n  display: block;\n  width: 50%;\n  margin-left: 20px;\n  padding: 5px 20px;\n  font-size: 1em;\n  border-radius: 3px;\n  outline: none;\n  border: 1px solid #ccc; }\n\nform .help {\n  margin-left: 20px;\n  font-size: 0.8em;\n  color: #777; }\n\nform button {\n  position: relative;\n  margin-top: 30px;\n  margin-bottom: 30px;\n  left: 50%;\n  -webkit-transform: translate(-50%, 0);\n          transform: translate(-50%, 0);\n  font-family: inherit;\n  color: white;\n  background: #FF3838;\n  outline: none;\n  border: none;\n  padding: 5px 15px;\n  font-size: 1.3em;\n  font-weight: 400;\n  border-radius: 3px;\n  box-shadow: 0px 0px 10px rgba(51, 51, 51, 0.4);\n  cursor: pointer;\n  transition: all 0.15s ease-in-out; }\n\nform button:hover {\n  background: #ff5252; }\n", ""]);

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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-user-login',
        template: __webpack_require__("../../../../../src/app/user-login/user-login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user-login/user-login.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], UserLoginComponent);

var _a;
//# sourceMappingURL=user-login.component.js.map

/***/ }),

/***/ "../../../../../src/app/welcome-page/welcome-page.component.html":
/***/ (function(module, exports) {

module.exports = "<p class=\"home-title\">\n  {{title}}\n</p>"

/***/ }),

/***/ "../../../../../src/app/welcome-page/welcome-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".home-title {\n  font-size: 34px;\n  margin-top: 350px;\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/welcome-page/welcome-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var WelcomePageComponent = (function () {
    function WelcomePageComponent() {
        this.title = "Welcome to Catalog Management Application";
    }
    return WelcomePageComponent;
}());
WelcomePageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-welcome-page',
        template: __webpack_require__("../../../../../src/app/welcome-page/welcome-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/welcome-page/welcome-page.component.scss")]
    })
], WelcomePageComponent);

//# sourceMappingURL=welcome-page.component.js.map

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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-left: 200px; margin-right: 200px; background-color: aliceblue;\">\n    <ul class=\"nav nav-tabs\">\n        <li id=\"home\" class=\"active\"><a data-toggle=\"tab\" (click)='changeTab(true)'>Home</a></li>\n        <li id=\"edit\"><a data-toggle=\"tab\" (click)='changeTab(false)'>Edit</a></li>\n    </ul>\n    <div class=\"tab-content\" style=\"margin-top: 30px;\" *ngIf=\"is_edit\">\n        <div class=\"col-xs-1\">\n        </div>\n         <div class=\"col-xs-6\">\n            <input type=\"text\" title=\"Search by product name\" class=\"form-control\" placeholder=\"Search by product name...\" [(ngModel)]=\"product_search\" (ngModelChange)=\"getSearchedProducts()\"\n              [typeahead]=\"product_list\" typeaheadOptionField=\"product_name\" (typeaheadOnSelect)=\"selectProduct($event)\" (keydown.enter)=\"$event.preventDefault()\" autocomplete=\"off\">\n        </div>\n    </div>\n    <div id=\"homePage\" class=\"tab-pane fade in active\" style=\"margin-top: 30px;\">\n        <form [formGroup]=\"productForm\" (keydown.enter)=\"(productForm.valid && (productForm.value.cost_price >= productForm.value.selling_price)) ? saveProductDetails() : (submitted_invalid = true)\">\n            <div class=\"col-xs-12 mod_body_single\" style=\"background-color: bisque;\">\n                <div class='col-xs-12' style=\"padding-top: 10px;\">\n                    <div class=\"col-xs-3\"><label>Product Id</label></div>\n                    <div class=\"col-xs-6\">\n                        <input type=\"number\" class=\"form-control\" title=\"Product Id\" formControlName='product_id' placeholder=\"Product Id...\" [attr.disabled]=\"is_edit ? true : null\">\n                        <small class=\"mod_errors\" style=\"padding-left: 15px; color: red;\" *ngIf=\"(!productForm.controls['product_id'].valid && submitted_invalid)\">*This field is required.</small>\n                    </div>\n                </div>\n                <div class='col-xs-12' style=\"padding-top: 10px;\">\n                    <div class=\"col-xs-3\"><label>Quantity</label></div>\n                    <div class=\"col-xs-6\">\n                        <input type=\"number\" class=\"form-control\" title=\"Quantity\" formControlName='quantity' placeholder=\"Quantity...\" [attr.disabled]=\"is_edit ? true : null\">\n                        <small class=\"mod_errors\" style=\"padding-left: 15px; color: red;\" *ngIf=\"(!productForm.controls['quantity'].valid && submitted_invalid)\">*This field is required.</small>\n                    </div>\n                </div>\n                <div class='col-xs-12' style=\"padding-top: 10px;\">\n                    <div class=\"col-xs-3\"><label>Product Name</label></div>\n                    <div class=\"col-xs-6\">\n                        <input type=\"text\" class=\"form-control\" title=\"Product Name\" formControlName='product_name' placeholder=\"Product Name...\">\n                        <small class=\"mod_errors\" style=\"padding-left: 15px; color: red;\" *ngIf=\"(!productForm.controls['product_name'].valid && submitted_invalid)\">*This field is required and must contain alphanumeric value.</small>\n                    </div>\n                </div>\n                <div class='col-xs-12' style=\"padding-top: 10px;\">\n                    <div class=\"col-xs-3\"><label>Cost Price</label></div>\n                    <div class=\"col-xs-6\">\n                        <input type=\"number\" class=\"form-control\" title=\"Cost Price\" formControlName='cost_price' placeholder=\"Cost Price...\" [attr.disabled]=\"is_edit ? true : null\">\n                        <small class=\"mod_errors\" style=\"padding-left: 15px; color: red;\" *ngIf=\"(!productForm.controls['cost_price'].valid && submitted_invalid)\">*This field is required.</small>\n                    </div>\n                </div>\n                <div class='col-xs-12' style=\"padding-top: 10px;\">\n                    <div class=\"col-xs-3\"><label>Selling Price</label></div>\n                    <div class=\"col-xs-6\">\n                        <input type=\"number\" class=\"form-control\" title=\"Selling Price\" formControlName='selling_price' placeholder=\"Selling Price...\">\n                        <small class=\"mod_errors\" style=\"padding-left: 15px; color: red;\" *ngIf=\"((!productForm.controls['selling_price'].valid || (productForm.value.cost_price < productForm.value.selling_price)) && submitted_invalid)\">*This field is required and value must be less than cost price.</small>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common.service */ "./src/app/common.service.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(commonService) {
        this.commonService = commonService;
        this.title = 'robobai';
        this.product_search = '';
        this.product_list = [];
        this.is_edit = true;
        this.current_id = null;
        this.submitted_invalid = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.productForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            product_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
            quantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
            product_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[a-zA-Z ~!@#$%^&*()_+-/.{}[]|;:'"<>,?=]+$/)
            ]),
            cost_price: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
            selling_price: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[0-9]+$/),
            ])
        });
    };
    AppComponent.prototype.saveProductDetails = function () {
        var _this = this;
        if (this.current_id)
            this.productForm.value._id = this.current_id;
        this.commonService.saveProduct(this.productForm.value)
            .subscribe(function (data) {
            _this.productForm.reset();
            _this.current_id = null;
            _this.submitted_invalid = false;
        });
    };
    AppComponent.prototype.getSearchedProducts = function () {
        var _this = this;
        this.commonService.searchProducts(this.product_search)
            .subscribe(function (data) {
            _this.product_list = data;
        });
    };
    AppComponent.prototype.selectProduct = function (selected_product) {
        this.current_id = selected_product.item._id;
        this.submitted_invalid = false;
        if (selected_product)
            this.productForm.reset(selected_product.item);
    };
    AppComponent.prototype.changeTab = function (is_edit) {
        this.is_edit = is_edit;
        this.productForm.reset();
        this.current_id = null;
        this.submitted_invalid = false;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/typeahead */ "./node_modules/ngx-bootstrap/typeahead/fesm5/ngx-bootstrap-typeahead.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common.service */ "./src/app/common.service.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_5__["TypeaheadModule"].forRoot()
            ],
            providers: [_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common.service.ts":
/*!***********************************!*\
  !*** ./src/app/common.service.ts ***!
  \***********************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var CommonService = /** @class */ (function () {
    function CommonService(http) {
        this.http = http;
        this.url = "http://localhost:3000";
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');
    }
    CommonService.prototype.saveProduct = function (data) {
        var api_url = this.url + '/api/save_product_details';
        return this.http.post(api_url, data, { headers: this.headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.error));
    };
    CommonService.prototype.searchProducts = function (product_search) {
        var api_url = this.url + '/api/product_search?product_search=' + product_search;
        return this.http.get(api_url, { headers: this.headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.error));
    };
    //Throw Error function
    CommonService.prototype.error = function (error) {
        var error_message = '';
        if (error.error instanceof ErrorEvent) {
            error_message = error.error.message;
        }
        else {
            error_message = "Above error occurred. Error Code: " + error.status + "\nMessage: " + error.message;
        }
        console.log(error_message);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error_message);
    };
    CommonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CommonService);
    return CommonService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/jagruti/PersonalData/robobai/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n\r\n  <div class=\"form-continer\">\r\n    <form #countryform=\"ngForm\" (ngSubmit)=\"countryform.resetForm()\">\r\n      <div class=\"form-group\">\r\n        <h1>Countries lookup</h1>\r\n        <div class=\"input-group-prepend\">\r\n          <mat-form-field class=\"form-field\">\r\n            <input #country class=\"form-control\" type=\"text\" placeholder=\"Country name\" matInput\r\n              [formControl]=\"countryctrl\" [matAutocomplete]=\"auto\" name=\"country\" autocomplete=\"on\" ngModel required>\r\n            <button mat-button type=\"submit\" class=\"input-group-text\" (click)=\"searchCountry(country)\">Search</button>\r\n            <mat-autocomplete #auto=\"matAutocomplete\"  (optionSelected)=\"searchCountry(country)\">\r\n              <mat-option *ngFor=\"let country of filteredOptions | async\" [value]=\"country.name\">\r\n                {{country.name}} ({{country.alpha3Code}})\r\n              </mat-option>\r\n            </mat-autocomplete>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n    </form>\r\n\r\n    <div>\r\n      <app-history></app-history>\r\n    </div>\r\n    \r\n  </div>\r\n\r\n  <div class=\"data\" >\r\n    <app-country-info></app-country-info>\r\n  </div>\r\n\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/country/country.componenet.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/country/country.componenet.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"country\">\n  <p>{{country.name}}</p>\n  <img class=\"flag\" src={{country.flag}}/>\n  <table mat-table [dataSource]=\"transformed\">\n    <ng-container matColumnDef=\"key\">\n      <td class=\"key\" mat-cell *matCellDef=\"let country\"> {{country.key}} </td>\n    </ng-container>\n    <ng-container matColumnDef=\"content\">\n      <td class=\"content\" mat-cell *matCellDef=\"let country\"> {{country.content}} </td>\n    </ng-container>\n    <tr mat-row *matRowDef=\"let row; columns: columnsToDisplay ;\"></tr>\n  </table>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/history/history.componenet.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/history/history.componenet.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"history\" *ngIf=\"histories\">\n  <h4>Search History</h4>\n  <ul class=\"list\">\n    <button mat-button *ngFor=\"let country of histories; let i=index\" (click)=\"loadInfo(country)\"><span>{{country.name}} ({{country.alpha3Code}})</span></button>\n  </ul>\n</div>");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form-continer {\r\n    max-width: 20em;\r\n    width: 260px;\r\n    background: #f4f4f4;\r\n    padding: 1em;\r\n    position: fixed;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 1;\r\n}\r\n\r\nform h1 {\r\n    color: #eeb007;\r\n}\r\n\r\nform input[type=text]::-moz-placeholder {\r\n    color: #666;\r\n}\r\n\r\nform input[type=text]::-ms-input-placeholder {\r\n    color: #666;\r\n}\r\n\r\nform input[type=text]::placeholder {\r\n    color: #666;\r\n}\r\n\r\nform .form-field {\r\n    width: 100%;\r\n}\r\n\r\nform .input-group-text {\r\n    background: #eeb007;\r\n    float: right;\r\n}\r\n\r\nform .input-group-text i {\r\n    font-size: 2em;\r\n}\r\n\r\nform .form-control {\r\n    height: 3em;\r\n    max-width: 60%;\r\n}\r\n\r\nform .form-control:focus {\r\n    box-shadow: 0;\r\n}\r\n\r\n.data {\r\n    margin-left: 300px;\r\n    font-size: 28px;\r\n    padding: 0px 10px;\r\n}\r\n\r\n@media screen and (max-width: 700px) {\r\n    .form-continer {\r\n        width: inherit;\r\n        height: auto;\r\n        position: relative;\r\n        margin: auto;\r\n        padding: 1em;\r\n        max-width: 98%;\r\n        padding-left: 5%;\r\n        margin: 0;\r\n        overflow: auto;\r\n    }\r\n\r\n    form .form-field {\r\n        width: 92%;\r\n    }\r\n\r\n    .data {\r\n        font-size: 28px;\r\n        margin: auto;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZUFBZTtJQUNmLFlBQVk7SUFDWixNQUFNO0lBQ04sT0FBTztJQUNQLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRkE7SUFDSSxXQUFXO0FBQ2Y7O0FBRkE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJO1FBQ0ksY0FBYztRQUNkLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLFlBQVk7UUFDWixjQUFjO1FBQ2QsZ0JBQWdCO1FBQ2hCLFNBQVM7UUFDVCxjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksVUFBVTtJQUNkOztJQUVBO1FBQ0ksZUFBZTtRQUNmLFlBQVk7SUFDaEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY29udGluZXIge1xyXG4gICAgbWF4LXdpZHRoOiAyMGVtO1xyXG4gICAgd2lkdGg6IDI2MHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2Y0ZjRmNDtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG5mb3JtIGgxIHtcclxuICAgIGNvbG9yOiAjZWViMDA3O1xyXG59XHJcblxyXG5mb3JtIGlucHV0W3R5cGU9dGV4dF06OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjNjY2O1xyXG59XHJcblxyXG5mb3JtIC5mb3JtLWZpZWxkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5mb3JtIC5pbnB1dC1ncm91cC10ZXh0IHtcclxuICAgIGJhY2tncm91bmQ6ICNlZWIwMDc7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbmZvcm0gLmlucHV0LWdyb3VwLXRleHQgaSB7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxufVxyXG5cclxuZm9ybSAuZm9ybS1jb250cm9sIHtcclxuICAgIGhlaWdodDogM2VtO1xyXG4gICAgbWF4LXdpZHRoOiA2MCU7XHJcbn1cclxuXHJcbmZvcm0gLmZvcm0tY29udHJvbDpmb2N1cyB7XHJcbiAgICBib3gtc2hhZG93OiAwO1xyXG59XHJcblxyXG4uZGF0YSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMzAwcHg7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcclxuICAgIC5mb3JtLWNvbnRpbmVyIHtcclxuICAgICAgICB3aWR0aDogaW5oZXJpdDtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBwYWRkaW5nOiAxZW07XHJcbiAgICAgICAgbWF4LXdpZHRoOiA5OCU7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgZm9ybSAuZm9ybS1maWVsZCB7XHJcbiAgICAgICAgd2lkdGg6IDkyJTtcclxuICAgIH1cclxuXHJcbiAgICAuZGF0YSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxufSJdfQ== */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/service */ "./src/app/services/service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var AppComponent = /** @class */ (function () {
    function AppComponent(service) {
        this.service = service;
        this.title = 'countries-app';
        this.countries = [];
        this.country = {};
        this.countryctrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Getting country list from service (API acces point)
        this.service.getCountries().subscribe(function (res) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.countries = res;
                this.filteredOptions = this.countryctrl.valueChanges // filtered option for autocomplete
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (value) { return _this._filter(value); }));
                return [2 /*return*/];
            });
        }); });
    };
    // unsubscribe to avoid memory leackage
    AppComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    /**
     * on form submit, search selected country then send it to service for other components
     * @param input: DOM element getting user input for searching a country
     */
    AppComponent.prototype.searchCountry = function (input) {
        var _this = this;
        var selected = input.value;
        if (selected != null && selected !== '') {
            var selectedCountry = this.countries.filter(function (country) { return _this._isMatching(country, _this._getRegex(selected)); })[0];
            if (selectedCountry) {
                this.service.setCountry(selectedCountry);
                this.service.addHistory(selectedCountry);
                this.countryctrl.reset();
            }
        }
    };
    /**
     * Helper function reutrning a match list for search
     * @param value: string of country name or ISO code user supplied
     */
    AppComponent.prototype._filter = function (value) {
        var _this = this;
        var filterValue = value ? value.toLowerCase() : '';
        if (filterValue.length >= 3) {
            return this.countries.filter(function (country) { return _this._isMatching(country, _this._getRegex(filterValue)); }).slice(0, 9);
        }
    };
    /**
     * Helper funciton for _filter returns test result for multiple attirbutes of an object
     * @param country: country object
     * @param reg: regex expression for testing
     * @returns boolean value for test result for both country name and alpha3code
     */
    AppComponent.prototype._isMatching = function (country, reg) {
        return reg.test(country.name.replace(/[^a-zA-Z0-9_\s]/g, '')) || reg.test(country.alpha3Code);
    };
    /**
     * Helper funciton for _filter returning regex expression
     * @param input user input
     * @returns RegExp created based on user input
     */
    AppComponent.prototype._getRegex = function (input) {
        input = input.replace(/[^a-zA-Z0-9_\s]/g, '');
        var exp = '(' + input;
        if (input.match(/\s/ig)) {
            var split = input.split(' ');
            exp += '|' + split[0] + '\\w\\s\\(?' + split[1];
        }
        exp += ')';
        return new RegExp(exp, 'ig');
    };
    AppComponent.ctorParameters = function () { return [
        { type: _services_service__WEBPACK_IMPORTED_MODULE_2__["Service"] }
    ]; };
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        })
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/service */ "./src/app/services/service.ts");
/* harmony import */ var _country_country_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./country/country.component */ "./src/app/country/country.component.ts");
/* harmony import */ var _history_history_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./history/history.component */ "./src/app/history/history.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/slider.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/table.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/autocomplete.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/button.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/input.js");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _country_country_component__WEBPACK_IMPORTED_MODULE_7__["CountryInfoComponent"],
                _history_history_component__WEBPACK_IMPORTED_MODULE_8__["HistoryComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_10__["MatSliderModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__["MatAutocompleteModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatRippleModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"]
            ],
            providers: [_services_service__WEBPACK_IMPORTED_MODULE_6__["Service"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/country/country.componenet.css":
/*!************************************************!*\
  !*** ./src/app/country/country.componenet.css ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.flag {\r\n    min-width: 20%;\r\n    display: inline-block;\r\n    max-width: 250px;\r\n    padding: 10px;\r\n    background: #f4f4f4;\r\n}\r\n\r\n.key {\r\n    width: 15em;\r\n    max-width: 250px;\r\n    font-weight: bold;\r\n    font-size: 18px;\r\n}\r\n\r\n.content {\r\n    width: 40em;\r\n    max-width: 300px;\r\n    font-size: 16px;\r\n}\r\n\r\n@media screen and (max-width: 700px) {\r\n    .flag {\r\n        display: inline-block;\r\n        max-width: 92%;\r\n        padding: 3%;\r\n    }\r\n\r\n    .key {\r\n        width: 15em;\r\n        max-width: 250px;\r\n        font-weight: bold;\r\n        font-size: 14px;\r\n    }\r\n\r\n    .content {\r\n        text-align: right;\r\n        font-size: 14px;\r\n    }\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291bnRyeS9jb3VudHJ5LmNvbXBvbmVuZXQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0k7UUFDSSxxQkFBcUI7UUFDckIsY0FBYztRQUNkLFdBQVc7SUFDZjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsZUFBZTtJQUNuQjs7QUFFSiIsImZpbGUiOiJzcmMvYXBwL2NvdW50cnkvY291bnRyeS5jb21wb25lbmV0LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmZsYWcge1xyXG4gICAgbWluLXdpZHRoOiAyMCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXgtd2lkdGg6IDI1MHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmNGY0ZjQ7XHJcbn1cclxuXHJcbi5rZXkge1xyXG4gICAgd2lkdGg6IDE1ZW07XHJcbiAgICBtYXgtd2lkdGg6IDI1MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICAgIHdpZHRoOiA0MGVtO1xyXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcclxuICAgIC5mbGFnIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA5MiU7XHJcbiAgICAgICAgcGFkZGluZzogMyU7XHJcbiAgICB9XHJcblxyXG4gICAgLmtleSB7XHJcbiAgICAgICAgd2lkdGg6IDE1ZW07XHJcbiAgICAgICAgbWF4LXdpZHRoOiAyNTBweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuXHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/country/country.component.ts":
/*!**********************************************!*\
  !*** ./src/app/country/country.component.ts ***!
  \**********************************************/
/*! exports provided: CountryInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryInfoComponent", function() { return CountryInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/table.js");
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/service */ "./src/app/services/service.ts");




var CountryInfoComponent = /** @class */ (function () {
    function CountryInfoComponent(service) {
        var _this = this;
        this.service = service;
        this.labels = { 'Name': 'name', 'Currency Name': 'currencies', 'Latitude/longitude': 'latlng', 'Land Area': 'area' }; // Labels of table
        this.columnsToDisplay = ['key', 'content'];
        // subscribe to app component messages (selected country)
        this.subscription = this.service.getCountry().subscribe(function (data) {
            if (data !== undefined) {
                _this.country = data;
                _this.transformed = _this.transformData(data);
            }
        });
    }
    // unsubscribe to avoid memory leackage
    CountryInfoComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    /**
     * Format country data to display on mat-table. This function creates a list of rows.
     * @param data: country object
     */
    CountryInfoComponent.prototype.transformData = function (data) {
        var _this = this;
        var temp = [];
        Object.keys(this.labels).forEach(function (k) {
            var row = {
                key: k,
                content: _this._format(k, data[_this.labels[k]])
            };
            temp.push(row);
        });
        return new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](temp);
    };
    /**
     * Helper function for formating data depending on spec
     * @param k: key of row
     * @param value: value of row
     */
    CountryInfoComponent.prototype._format = function (k, value) {
        var cont;
        switch (k) {
            case 'Currency Name':
                cont = value[0].name + ' (' + value[0].symbol + ')';
                break;
            case 'Latitude/longitude':
                cont = value && typeof value === 'object' && value.length > 0 ? value.join(' / ') : 'unknown';
                break;
            case 'Land Area':
                cont = value ? value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '	\u33A2' : 'unknown';
                break;
            default:
                cont = value;
                break;
        }
        return cont;
    };
    CountryInfoComponent.ctorParameters = function () { return [
        { type: _services_service__WEBPACK_IMPORTED_MODULE_3__["Service"] }
    ]; };
    CountryInfoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-country-info',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./country.componenet.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/country/country.componenet.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./country.componenet.css */ "./src/app/country/country.componenet.css")).default]
        })
        /** CountryInfoComponent is responsible for displaying information of selected countries */
    ], CountryInfoComponent);
    return CountryInfoComponent;
}());



/***/ }),

/***/ "./src/app/history/history.componenet.css":
/*!************************************************!*\
  !*** ./src/app/history/history.componenet.css ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".history {\r\n    margin-top: 1em;\r\n}\r\n\r\n.history .list {\r\n    list-style-type: none;\r\n    padding: 0;\r\n}\r\n\r\n.history button {\r\n    background: #fff;\r\n    border-left: 4px solid #eeb007;\r\n    padding: 10px;\r\n    margin: 5px auto;\r\n    color: #666;\r\n    white-space: normal;\r\n    text-align: left;\r\n    width: 250px;\r\n    line-height: 1.5em;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGlzdG9yeS9oaXN0b3J5LmNvbXBvbmVuZXQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsOEJBQThCO0lBQzlCLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2hpc3RvcnkvaGlzdG9yeS5jb21wb25lbmV0LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oaXN0b3J5IHtcclxuICAgIG1hcmdpbi10b3A6IDFlbTtcclxufVxyXG5cclxuLmhpc3RvcnkgLmxpc3Qge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmhpc3RvcnkgYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkICNlZWIwMDc7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luOiA1cHggYXV0bztcclxuICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS41ZW07XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/history/history.component.ts":
/*!**********************************************!*\
  !*** ./src/app/history/history.component.ts ***!
  \**********************************************/
/*! exports provided: HistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryComponent", function() { return HistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/service */ "./src/app/services/service.ts");



var HistoryComponent = /** @class */ (function () {
    function HistoryComponent(service) {
        var _this = this;
        this.service = service;
        // subscribe to app component messages (search histories)
        this.subscription = this.service.getHistory().subscribe(function (data) {
            if (data !== undefined && data.length > 0) {
                _this.histories = data;
            }
        });
    }
    /**
     * Handling click event of history element. Sets new selected country to display on CountryInfo component
     * @param country: selected country
     */
    HistoryComponent.prototype.loadInfo = function (country) {
        this.service.setCountry(country);
    };
    // unsubscribe to avoid memory leackage
    HistoryComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    HistoryComponent.ctorParameters = function () { return [
        { type: _services_service__WEBPACK_IMPORTED_MODULE_2__["Service"] }
    ]; };
    HistoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-history',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./history.componenet.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/history/history.componenet.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./history.componenet.css */ "./src/app/history/history.componenet.css")).default]
        })
        /** HistoryComponent is responsible for displaying histories section */
    ], HistoryComponent);
    return HistoryComponent;
}());



/***/ }),

/***/ "./src/app/services/service.ts":
/*!*************************************!*\
  !*** ./src/app/services/service.ts ***!
  \*************************************/
/*! exports provided: Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Service", function() { return Service; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var Service = /** @class */ (function () {
    function Service(http) {
        this.http = http;
        this.API = 'https://restcountries.eu/rest/v2/all';
        this.country = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        // ref: https://coryrylan.com/blog/angular-observable-data-services
        this._histories = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.dataStore = { histories: [] };
        this.histories = this._histories.asObservable();
        this.historymap = {};
    }
    /**  getCountries returns a list of all countries */
    Service.prototype.getCountries = function () {
        return this.http.get(this.API).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res; }));
    };
    /**  getCountry returns an observable Country object that is being selected */
    Service.prototype.getCountry = function () {
        return this.country.asObservable();
    };
    /**  setCountry takes a Country parameter being selected */
    Service.prototype.setCountry = function (country) {
        this.country.next(this.format(country));
    };
    /**  getHistory returns a list of observable Countries being searched by user */
    Service.prototype.getHistory = function () {
        return this.histories;
    };
    /**  addHistory takes a Country object and store it in an observable list of countries being searched (histories) */
    Service.prototype.addHistory = function (country) {
        if (!this.historymap[country.alpha3Code]) {
            this.historymap[country.alpha3Code] = 1;
            if (this.dataStore.histories.length === 10) {
                this.dataStore.histories.pop();
            }
            var temp = [country];
            this.dataStore.histories = temp.concat(this.dataStore.histories);
            this._histories.next(Object.assign({}, this.dataStore).histories);
        }
    };
    /** helper function to format country object */
    Service.prototype.format = function (country) {
        var parsed = {
            name: country.name,
            flag: country.flag,
            currencies: country.currencies,
            latlng: country.latlng,
            area: country.area,
            alpha2Code: country.alpha2Code
        };
        return parsed;
    };
    Service.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    Service = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
    ], Service);
    return Service;
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
    production: true
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm5/platform-browser-dynamic.js");
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

module.exports = __webpack_require__(/*! C:\BitBucket\flare\angular\countries\countries-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
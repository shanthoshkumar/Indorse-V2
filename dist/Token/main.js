(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule, routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _purchase_purchase_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../purchase/purchase.component */ "./src/app/purchase/purchase.component.ts");
/* harmony import */ var _list_of_services_list_of_services_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../list-of-services/list-of-services.component */ "./src/app/list-of-services/list-of-services.component.ts");
/* harmony import */ var _create_service_create_service_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../create_service/create_service.component */ "./src/app/create_service/create_service.component.ts");
/* harmony import */ var _check_admin_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../check-admin.guard */ "./src/app/check-admin.guard.ts");
/* harmony import */ var _metamask_error_metamask_error_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../metamask-error/metamask-error.component */ "./src/app/metamask-error/metamask-error.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../login/login.component */ "./src/app/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routes = [
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
    },
    {
        path: 'admin',
        component: _create_service_create_service_component__WEBPACK_IMPORTED_MODULE_4__["create_serviceComponent"],
        canActivate: [_check_admin_guard__WEBPACK_IMPORTED_MODULE_5__["CheckAdminGuard"]]
    },
    {
        path: 'purchase',
        component: _purchase_purchase_component__WEBPACK_IMPORTED_MODULE_2__["PurchaseComponent"]
    },
    {
        path: 'service',
        component: _list_of_services_list_of_services_component__WEBPACK_IMPORTED_MODULE_3__["ListOfServicesComponent"],
    },
    {
        path: 'metamask',
        component: _metamask_error_metamask_error_component__WEBPACK_IMPORTED_MODULE_6__["MetamaskErrorComponent"]
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    }
];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div id=\"navbar\">\r\n  <app-header></app-header>\r\n</div>\r\n\r\n\r\n<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    // public canshow:boolean=true;
    function AppComponent() {
        this.title = 'app';
        // (document.getElementById('navbar') as HTMLInputElement).hidden=true;
    }
    AppComponent.prototype.hide = function () {
        document.getElementById('navbar').hidden = true;
    };
    AppComponent.prototype.change = function () {
        document.getElementById('navbar').hidden = false;
    };
    AppComponent.prototype.ngOnInit = function () {
        this.hide();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _purchase_purchase_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./purchase/purchase.component */ "./src/app/purchase/purchase.component.ts");
/* harmony import */ var _create_service_create_service_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./create_service/create_service.component */ "./src/app/create_service/create_service.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _list_of_services_list_of_services_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./list-of-services/list-of-services.component */ "./src/app/list-of-services/list-of-services.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _metamask_error_metamask_error_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./metamask-error/metamask-error.component */ "./src/app/metamask-error/metamask-error.component.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _purchase_purchase_component__WEBPACK_IMPORTED_MODULE_6__["PurchaseComponent"],
                _create_service_create_service_component__WEBPACK_IMPORTED_MODULE_7__["create_serviceComponent"],
                _list_of_services_list_of_services_component__WEBPACK_IMPORTED_MODULE_9__["ListOfServicesComponent"],
                _metamask_error_metamask_error_component__WEBPACK_IMPORTED_MODULE_11__["MetamaskErrorComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["routes"]),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerModule"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]],
            providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_12__["CookieService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/check-admin.guard.ts":
/*!**************************************!*\
  !*** ./src/app/check-admin.guard.ts ***!
  \**************************************/
/*! exports provided: CheckAdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckAdminGuard", function() { return CheckAdminGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_contract_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/contract.service */ "./src/app/services/contract.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CheckAdminGuard = /** @class */ (function () {
    function CheckAdminGuard(cs, route) {
        this.cs = cs;
        this.route = route;
    }
    CheckAdminGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.cs.check_admin().then(function (admin) {
            if (admin) {
                return true;
            }
            else {
                _this.route.navigate(['service']);
                return false;
            }
        });
    };
    CheckAdminGuard.prototype.ngOnInit = function () {
        // let meta = this;
        // meta.cs.getAccount().then(acc => { 
        //     this.account = acc;
        //     meta.id1 = setInterval(function() {
        //       if (typeof window.web3 !== 'undefined') {
        //           meta._web3 = new Web3(window.web3.currentProvider);
        //           if (meta._web3.eth.accounts[0] !== meta.account) {
        //               meta.account = meta._web3.eth.accounts[0];
        //               if (meta._web3.eth.accounts[0] === undefined) {
        //                   // meta.router.navigate(['metamask']);
        //                   clearInterval(this.interval);
        //               } else {
        //                   window.location.reload(true);                   }
        //           }
        //       } else {
        //           // meta.router.navigate(['metamask']);
        //       }
        //      }, 200);
        //  }); 
    };
    CheckAdminGuard.prototype.ngOnDestroy = function () {
        if (this.id1) {
            clearInterval(this.id1);
        }
    };
    CheckAdminGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_contract_service__WEBPACK_IMPORTED_MODULE_2__["ContractService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CheckAdminGuard);
    return CheckAdminGuard;
}());



/***/ }),

/***/ "./src/app/create_service/Unit.js":
/*!****************************************!*\
  !*** ./src/app/create_service/Unit.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Minified by jsDelivr using UglifyJS v3.1.10.
 * Original file: /npm/ethjs-unit@0.1.6/lib/index.js
 * 
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
function getValueOfUnit(e){var t=e?e.toLowerCase():"ether",n=unitMap[t];if("string"!=typeof n)throw new Error("[ethjs-unit] the unit provided "+e+" doesn't exists, please use the one of the following units "+JSON.stringify(unitMap,null,2));return new BN(n,10)}function numberToString(e){if("string"==typeof e){if(!e.match(/^-?[0-9.]+$/))throw new Error("while converting number to string, invalid number value '"+e+"', should be a number matching (^-?[0-9.]+).");return e}if("number"==typeof e)return String(e);if("object"==typeof e&&e.toString&&(e.toTwos||e.dividedToIntegerBy))return e.toPrecision?String(e.toPrecision()):e.toString(10);throw new Error("while converting number to string, invalid number value '"+e+"' type "+typeof e+".")}function fromWei(e,t,n){var r=numberToBN(e),i=r.lt(zero),o=getValueOfUnit(t),u=unitMap[t].length-1||1,a=n||{};i&&(r=r.mul(negative1));for(var g=r.mod(o).toString(10);g.length<u;)g="0"+g;a.pad||(g=g.match(/^([0-9]*[1-9]|0)(0*)/)[1]);var l=r.div(o).toString(10);a.commify&&(l=l.replace(/\B(?=(\d{3})+(?!\d))/g,","));var h=l+("0"==g?"":"."+g);return i&&(h="-"+h),h}function toWei(e,t){var n=numberToString(e),r=getValueOfUnit(t),i=unitMap[t].length-1||1,o="-"===n.substring(0,1);if(o&&(n=n.substring(1)),"."===n)throw new Error("[ethjs-unit] while converting number "+e+" to wei, invalid value");var u=n.split(".");if(u.length>2)throw new Error("[ethjs-unit] while converting number "+e+" to wei,  too many decimal points");var a=u[0],g=u[1];if(a||(a="0"),g||(g="0"),g.length>i)throw new Error("[ethjs-unit] while converting number "+e+" to wei, too many decimal places");for(;g.length<i;)g+="0";a=new BN(a),g=new BN(g);var l=a.mul(r).add(g);return o&&(l=l.mul(negative1)),new BN(l.toString(10),10)}var BN=__webpack_require__(/*! bn.js */ "./node_modules/bn.js/lib/bn.js"),numberToBN=__webpack_require__(/*! number-to-bn */ "./node_modules/number-to-bn/src/index.js"),zero=new BN(0),negative1=new BN(-1),unitMap={noether:"0",wei:"1",kwei:"1000",Kwei:"1000",babbage:"1000",femtoether:"1000",mwei:"1000000",Mwei:"1000000",lovelace:"1000000",picoether:"1000000",gwei:"1000000000",Gwei:"1000000000",shannon:"1000000000",nanoether:"1000000000",nano:"1000000000",szabo:"1000000000000",microether:"1000000000000",micro:"1000000000000",finney:"1000000000000000",milliether:"1000000000000000",milli:"1000000000000000",ether:"1000000000000000000",kether:"1000000000000000000000",grand:"1000000000000000000000",mether:"1000000000000000000000000",gether:"1000000000000000000000000000",tether:"1000000000000000000000000000000"};module.exports={unitMap:unitMap,numberToString:numberToString,getValueOfUnit:getValueOfUnit,fromWei:fromWei,toWei:toWei};
//# sourceMappingURL=/sm/1fc7a0364448e3cf5e7bbf685f048c7913efeee7e342f02ed760bcf74d1a620f.map

/***/ }),

/***/ "./src/app/create_service/create_service.component.css":
/*!*************************************************************!*\
  !*** ./src/app/create_service/create_service.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/create_service/create_service.component.html":
/*!**************************************************************!*\
  !*** ./src/app/create_service/create_service.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "   \r\n  <script src=\"../bootstrap.min.css\"></script>\r\n  <script src=\"../bootstrap.min.js\"></script>\r\n   <div>\r\n   <div class=\"col-sm-3\">\r\n\r\n   <div id=\"input\">    \r\n    <h2 style=\"color:orange\">Create New Service<p class=\"glyphicon glyphicon-shopping-cart\"></p></h2> \r\n\r\n    <div class=\"form-group\">\r\n       <input class=\"form-control\"  #name id=\"n\" formControlName=\"name\"  [(ngModel)]=\"servicename\" type=\"text\" placeholder=\"Enter the Service Name\">\r\n    </div>\r\n   <div class=\"form-group\">\r\n       <input class=\"form-control\"  #price id=\"p\" formControlName=\"address\" [(ngModel)]=\"serviceprice\" type=\"text\" placeholder=\"Enter the  value in (Native) tokens \"> \r\n    </div>\r\n    <button type=\"submit\" #b1 class=\"btn btn-primary\" (click)=\"create(name.value,price.value)\">Create</button>\r\n    </div>\r\n   \r\n      \r\n  <div class=\"col-sm-12\">\r\n    \r\n   </div>\r\n\r\n   <div class=\"col-sm-12\"> \r\n      \r\n      </div> \r\n   </div>\r\n\r\n   <div class=\"col-sm-6\">     \r\n \r\n    <div class=\"col-sm-10\">\r\n      <h2 style=\"text-align:center\">Contract Balance in Ether<img src=\"assets\\if_ETH_1175230.png\" style=\"height:35px\"></h2> \r\n      <div>\r\n       <h3 style=\"text-align:center;color:red\">{{token_balance}}</h3>\r\n      </div><br>\r\n  \r\n     \r\n   </div>\r\n         \r\n \r\n   </div>\r\n   <div class=\"col-sm-3\">\r\n      <h2 style=\"color:dodgerblue\">Withdraw Your Amount <p class=\"\tglyphicon glyphicon-hand-down\"></p></h2> \r\n      <div>\r\n        <div>\r\n            <input type=\"text\" class=\"form-control\" #amount id=\"with_amt\" [(ngModel)]=\"withdrawamt\" [value]=\"withdrawamt\" formControlName=\"withdrawamt\" placeholder=\"Enter amount in ether\">\r\n          </div><br>\r\n      \r\n         <button  class=\"btn btn-info\" id='b1' (click)=\"withdraw(amount.value)\">Withdraw</button>\r\n       </div>\r\n       <div><br>\r\n        <p id='p1' style=\"color:red\"></p>\r\n        <p id='p2' style=\"color:green\"></p>\r\n       </div>\r\n   </div>\r\n   <ngx-spinner></ngx-spinner>\r\n  \r\n </div>  \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n <!-- <form [formGroup]=\"angForm\" novalidate>\r\n\r\n <div class=\"form-group\">\r\n    <input class=\"form-control\" formControlName=\"name\" type=\"text\" placeholder=\"Enter the Service Name\" #name>\r\n </div>\r\n<div class=\"form-group\">\r\n    <input class=\"form-control\" formControlName=\"address\" type=\"text\" placeholder=\"Enter the  value in (IND) tokens \" #price> \r\n </div>\r\n <button type=\"submit\"\r\n   [disabled]=\"angForm.pristine || angForm.invalid\" #b2 class=\"btn btn-primary\" (click)=\"create(name.value,price.value)\">Register\r\n </button>\r\n </form> -->\r\n\r\n \r\n "

/***/ }),

/***/ "./src/app/create_service/create_service.component.ts":
/*!************************************************************!*\
  !*** ./src/app/create_service/create_service.component.ts ***!
  \************************************************************/
/*! exports provided: create_serviceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create_serviceComponent", function() { return create_serviceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_contract_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/contract.service */ "./src/app/services/contract.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! web3 */ "./node_modules/web3/src/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var unit = __webpack_require__(/*! ./Unit.js */ "./src/app/create_service/Unit.js");
var create_serviceComponent = /** @class */ (function () {
    function create_serviceComponent(cs, route, spin, cookie) {
        this.cs = cs;
        this.route = route;
        this.spin = spin;
        this.cookie = cookie;
        this.token_balance = null;
        this.servicename = ' ';
        this.serviceprice = ' ';
        this.withdrawamt = null;
        var ins = new _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]();
        ins.change();
        this.web3 = new web3__WEBPACK_IMPORTED_MODULE_4___default.a(new web3__WEBPACK_IMPORTED_MODULE_4___default.a.providers.HttpProvider('https://ropsten.infura.io/Vr1GWcLG0XzcdrZHWMPu'));
        var obj = new _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"](cs, cookie, route);
        obj.fetch_balances();
    }
    create_serviceComponent.prototype.create = function (name, price) {
        var _this = this;
        if (name == "") {
            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Please Enter Service Name");
            return;
        }
        else if (price == "") {
            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Please Enter Native Token Value");
            return;
        }
        else {
            this.spin.show();
            this.cs.get_cookie().then(function (input_key) {
                _this.cs.add_service(input_key, name, price).then(function (res) {
                    if (res == 0) {
                        _this.spin.hide();
                        sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("You Rejected this transaction..!");
                        document.getElementById('n').value = '';
                        document.getElementById('p').value = '';
                    }
                    else if (res == 2) {
                        _this.spin.hide();
                        sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Tranaction failed..!");
                        document.getElementById('n').value = '';
                        document.getElementById('p').value = '';
                    }
                    else if (res == 1) {
                        sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Service created Successfully");
                        var instance = new _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"](_this.cs, _this.cookie, _this.route);
                        instance.fetch_balances();
                        _this.spin.hide();
                        document.getElementById('n').value = '';
                        document.getElementById('p').value = '';
                    }
                });
            });
        }
    };
    create_serviceComponent.prototype.withdraw = function (amount) {
        var _this = this;
        if (amount == "") {
            document.getElementById("p2").innerHTML = "";
            document.getElementById("p1").innerHTML = "Please enter amount to Withdraw";
        }
        else {
            document.getElementById("p2").innerHTML = "Request in Progress";
            document.getElementById("p1").innerHTML = "";
            var amt = unit.toWei(amount.toString(), 'ether');
            this.cs.get_cookie().then(function (input_key) {
                _this.cs.withdraw(input_key, amt).then(function (res) {
                    if (res == 1) {
                        document.getElementById('with_amt').value = '';
                        _this.spin.hide();
                        document.getElementById("p2").innerHTML = "";
                        sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Amount Withdrew Successfully...!");
                        var instance = new _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"](_this.cs, _this.cookie, _this.route);
                        instance.fetch_balances();
                        _this.cs.token_contract_balance().then(function (result) { return _this.token_balance = result; });
                    }
                    else if (res == 0) {
                        document.getElementById('with_amt').value = '';
                        _this.spin.hide();
                        document.getElementById("p2").innerHTML = "";
                        sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("You Rejected this transaction..!");
                    }
                    else if (res == 2) {
                        _this.spin.hide();
                        document.getElementById("p2").innerHTML = "";
                        sweetalert__WEBPACK_IMPORTED_MODULE_5___default()('Transaction Reverted');
                    }
                    //document.getElementById("p2").innerHTML = " ";
                    //this.spin.hide();
                });
            });
            amount = '';
        }
    };
    create_serviceComponent.prototype.ngOnInit = function () {
        var _this = this;
        var meta = this;
        meta.cs.token_contract_balance().then(function (result) { return _this.token_balance = result; });
        // meta.id1 =setInterval(function(){
        //    meta.cs.token_contract_balance().then(result =>meta.token_balance =result)
        //  },200)
    };
    create_serviceComponent.prototype.ngOnDestroy = function () {
        //  if (this.id1) { 
        //    clearInterval(this.id1);
        //  }
        //          if (this.id2) { 
        //   clearInterval(this.id2);
        // }
    };
    create_serviceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create_service',
            template: __webpack_require__(/*! ./create_service.component.html */ "./src/app/create_service/create_service.component.html"),
            styles: [__webpack_require__(/*! ./create_service.component.css */ "./src/app/create_service/create_service.component.css")]
        }),
        __metadata("design:paramtypes", [_services_contract_service__WEBPACK_IMPORTED_MODULE_1__["ContractService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]])
    ], create_serviceComponent);
    return create_serviceComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n  <meta charset=\"utf-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n  <script src=\"../bootstrap.min.css\"></script>\r\n  <script src=\"../bootstrap.min.js\"></script>\r\n</head>\r\n<style>\r\n</style>\r\n<body>\r\n\r\n<nav class=\"navbar navbar-default\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <a class=\"navbar-brand\"><b>Native</b></a>\r\n    </div>\r\n    <ul class=\"nav navbar-nav\">\r\n      <li><a routerLink=\"/purchase\" id>PURCHASE TOKENS</a></li>\r\n      <li><a routerLink=\"/service\" id>BUY SERVICES</a></li>\r\n      <li><a routerLink=\"/admin\" id>ADD NEW SERVICES</a></li>\r\n      <li><a (click)=\"sign_out()\">Sign Out&nbsp;&nbsp;<span class=\"glyphicon glyphicon-arrow-right\"></span></a></li>\r\n\r\n    </ul>\r\n    <ul class=\"nav navbar-nav navbar-right\">\r\n      <li><a><input type=\"label\" class=\"form-control\" id=\"lbl_tkn\" readonly></a></li>\r\n      <li><a><input type=\"label\" class=\"form-control \"  id=\"lbl_eth\" readonly></a></li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n\r\n</body>\r\n</html>\r\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_contract_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/contract.service */ "./src/app/services/contract.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(cs, cookie, route) {
        this.cs = cs;
        this.cookie = cookie;
        this.route = route;
    }
    HeaderComponent.prototype.fetch_balances = function () {
        var _this = this;
        this.cs.get_cookie().then(function (input_key) {
            _this.cs.getAccount(input_key).then(function (account) {
                _this.cs.balanceOf(account).then(function (tkns) {
                    if (tkns > 0 && tkns < 0.1) {
                        _this.tokens = "<" + 0.1;
                    }
                    else {
                        _this.tokens = tkns;
                        document.getElementById('lbl_tkn').value = 'Tokens:' + (tkns).toString();
                    }
                    _this.cs.getUserBalance(account).then(function (amt) {
                        document.getElementById('lbl_eth').value = 'Ether:' + (amt).toString();
                    });
                });
            });
        });
    };
    HeaderComponent.prototype.sign_out = function () {
        this.cookie.delete('Secret_key');
        this.route.navigate(['login']);
    };
    HeaderComponent.prototype.ngOnInit = function () {
        var meta = this;
        meta.id1 = setInterval(function () {
            var state = meta.cookie.check('Secret_key');
            if (state != true) {
                clearInterval(this.interval);
                meta.route.navigate(['login']);
            }
        }, 50);
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        if (this.id1) {
            clearInterval(this.id1);
        }
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_services_contract_service__WEBPACK_IMPORTED_MODULE_1__["ContractService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/list-of-services/list-of-services.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/list-of-services/list-of-services.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/list-of-services/list-of-services.component.html":
/*!******************************************************************!*\
  !*** ./src/app/list-of-services/list-of-services.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<script defer src=\"/static/fontawesome/fontawesome-all.js\"></script>\r\n<script src=\"../bootstrap.min.css\"></script>\r\n<script src=\"../bootstrap.min.js\"></script>\r\n<div class=\"container\">\r\n  <div class=\"col-sm-2\"></div>\r\n  <div class=\"col-sm-12\" >     \r\n      <div class=\"col-sm-12\">\r\n    <h4 style=\"text-align: center\"><i style=\"color:blue\">Basket 1:For Native Tokens Holders </i></h4>\r\n    <h4 style=\"text-align: center\"><i style=\"color:green\">Basket 2:For who Needs To Become a Native Tokens Holder</i></h4>\r\n\r\n          <h2  style=\"color: tomato\" style=\"text-align: center;color: tomato\" >Purchase Services<p class=\"glyphicon glyphicon-shopping-cart\"></p></h2>\r\n          <div style=\"height:300px;overflow:auto;\">\r\n\r\n          <table class=\"table\"  >\r\n              <thead>\r\n                <tr>\r\n                  <th>Service Id</th>\r\n                  <th>Service Name</th>\r\n                  <th>Service Price(in Native tokens)</th>\r\n                  <th style=\"text-align: center\">Payment Type</th>\r\n\r\n                   </tr>\r\n              </thead>\r\n              <tbody id=\"user_bet_list\">\r\n                 <tr *ngFor=\"let service of services\">\r\n                     <td>{{ service.id }}</td>\r\n                     <td>{{ service.name }}</td>\r\n                     <td>{{ service.price }}</td>\r\n                     <td><button  class=\"btn btn-primary\"  (click)=\"Basket_1(service.id)\">Basket 1</button>&nbsp;\r\n                     <button  class=\"btn btn-success\"  (click)=\"Basket_2(service.id)\">Basket 2</button></td>                    \r\n                  </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n\r\n      \r\n      </div>\r\n    <br>\r\n      \r\n\r\n      <div class=\"col-sm-12\" style=\"height:300px;\"> \r\n          <h2 style=\"text-align: center;color:brown\">Your Services Are Listed Down Here</h2>\r\n          <div style=\"height:350px;overflow:auto;\">\r\n          <table class=\"table\">\r\n              <thead>\r\n                <tr style=\"background:white\">\r\n                  <th>Service Id</th>\r\n                  <th>Service Name</th>\r\n                  <th>Service Price(in Native tokens)</th>\r\n                  <th style=\"text-align:center\">Purchased Time</th>\r\n\r\n                   </tr>\r\n              </thead>\r\n              <tbody id=\"user_bet_list\">\r\n                 <tr *ngFor=\"let data of details\">\r\n                     <td>{{ data.id}}</td>\r\n                     <td>{{ data.name }}</td>\r\n                     <td>{{ data.price }}</td>\r\n                     <td>{{ data.time }}</td>\r\n                  </tr>\r\n              </tbody>\r\n            </table>\r\n            </div>\r\n         </div> \r\n\r\n  </div>\r\n  <ngx-spinner></ngx-spinner>\r\n \r\n</div>  "

/***/ }),

/***/ "./src/app/list-of-services/list-of-services.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/list-of-services/list-of-services.component.ts ***!
  \****************************************************************/
/*! exports provided: ListOfServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListOfServicesComponent", function() { return ListOfServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_contract_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/contract.service */ "./src/app/services/contract.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! web3 */ "./node_modules/web3/src/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ListOfServicesComponent = /** @class */ (function () {
    function ListOfServicesComponent(cs, route, spin, cookie) {
        this.cs = cs;
        this.route = route;
        this.spin = spin;
        this.cookie = cookie;
        this.services = [];
        this.details = [];
        var ins = new _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]();
        ins.change();
        this.list_services();
        this.web3 = new web3__WEBPACK_IMPORTED_MODULE_4___default.a(new web3__WEBPACK_IMPORTED_MODULE_4___default.a.providers.HttpProvider('https://ropsten.infura.io/Vr1GWcLG0XzcdrZHWMPu'));
        var obj = new _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"](cs, cookie, route);
        obj.fetch_balances();
    }
    ListOfServicesComponent.prototype.Basket_1 = function (id) {
        var _this = this;
        this.cs.get_cookie().then(function (input_key) {
            _this.cs.getAccount(input_key).then(function (account) {
                _this.cs.balanceOf(account).then(function (tkns) {
                    var obj = {};
                    _this.cs.service_details(id).then(function (data) {
                        obj['id'] = id;
                        obj['name'] = data[0];
                        obj['price'] = data[1] / 1000000000000000000;
                        if (tkns >= data[1] / 1000000000000000000) {
                            //swal("swal")
                            _this.spin.show();
                            _this.cs.buy_service(input_key, id).then(function (res) {
                                //this.spin.show();
                                if (res == 1) {
                                    _this.user_services();
                                    sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("You bought a Service...!");
                                    var instance = new _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"](_this.cs, _this.cookie, _this.route);
                                    instance.fetch_balances();
                                    _this.spin.hide();
                                }
                                else if (res == 0) {
                                    sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("You Rejected this Transaction...!");
                                    _this.spin.hide();
                                }
                                else if (res == 2) {
                                    sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Transaction failed...!");
                                    _this.spin.hide();
                                }
                            });
                        }
                        else {
                            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()(" You are having insufficient Native token balance ");
                        }
                    });
                });
            });
        });
    };
    ListOfServicesComponent.prototype.Basket_2 = function (id) {
        this.route.navigate(['purchase']);
    };
    ListOfServicesComponent.prototype.list_services = function () {
        var _this = this;
        this.cs.service_id().then(function (ids) {
            ids.forEach(function (i) {
                var obj = {};
                _this.cs.service_details(i).then(function (detail) {
                    obj['id'] = i;
                    obj['name'] = detail[0];
                    obj['price'] = detail[1] / 1000000000000000000;
                    _this.services.push(obj);
                });
            });
        });
    };
    ListOfServicesComponent.prototype.user_services = function () {
        var _this = this;
        this.details.length = 0;
        this.cs.service_id().then(function (ids) {
            ids.forEach(function (i) {
                _this.cs.get_cookie().then(function (input_key) {
                    _this.cs.user_services(input_key, i).then(function (result) {
                        var data = {};
                        if (result[0] != 0) {
                            _this.cs.service_details(i).then(function (details) {
                                data['id'] = i;
                                data['name'] = details[0];
                                data['price'] = details[1] / 1000000000000000000;
                                var tm = new Date(result[1] * 1000);
                                var time = tm.toString();
                                data['time'] = time;
                                _this.details.push(data);
                            });
                        }
                    });
                });
            });
        });
    };
    ListOfServicesComponent.prototype.ngOnInit = function () {
        this.user_services();
        //this.list_services();
        // let meta = this;
        // meta.cs.getAccount().then(acc => {
        //     this.account = acc;
        //     meta.id1 = setInterval(function() {
        //      if (typeof window.web3 !== 'undefined') {
        //          meta._web3 = new Web3(window.web3.currentProvider);
        //          if (meta._web3.eth.accounts[0] !== meta.account) {
        //              meta.account = meta._web3.eth.accounts[0];
        //              if (meta._web3.eth.accounts[0] === undefined) {
        //                  meta.route.navigate(['metamask']);
        //                  clearInterval(this.interval);
        //              }
        //               else 
        //              {
        //               window.location.reload(true);
        //              }
        //          }
        //      } else {
        //          meta.route.navigate(['metamask']);
        //      }
        //     }, 200);
        //  }); 
    };
    ListOfServicesComponent.prototype.ngOnDestroy = function () {
        if (this.id1) {
            clearInterval(this.id1);
        }
    };
    ListOfServicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-of-services',
            template: __webpack_require__(/*! ./list-of-services.component.html */ "./src/app/list-of-services/list-of-services.component.html"),
            styles: [__webpack_require__(/*! ./list-of-services.component.css */ "./src/app/list-of-services/list-of-services.component.css")]
        }),
        __metadata("design:paramtypes", [_services_contract_service__WEBPACK_IMPORTED_MODULE_1__["ContractService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])
    ], ListOfServicesComponent);
    return ListOfServicesComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<html>\n<head>\n <script src=\"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\"></script>\n  <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.2.0/css/all.css\" integrity=\"sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ\" crossorigin=\"anonymous\">\n  <script src=\"../bootstrap.min.css\"></script>\n  <script src=\"../bootstrap.min.js\"></script>\n</head>\n<body>  \n<div class=\"container\">\n <br><br><br> <br><br><br> <br><br><br> <br><br><br> <br><br><br>\n \n  <div class=\"row\">\n    <div class=\"col-sm-3\"></div>\n\n    <div class=\"col-sm-6\" id=\"div\">\n       <div class=\"jumbotron\" *ngIf=\"!canshow; else elseBlock\" style=\"background-image:linear-gradient(45deg, #0000ff 0%, #00ffcc 100%);\">\n        <div  style=\"text-align:center\">\n          <p style=\"color: wheat\">Enter Private Key</p>\n          <input type=\"text\" class=\"form-control\" #key >\n          <br>  \n          <input type=\"button\" value=\"Sign in\" (click)=\"fetch_account(key.value)\">\n        </div>\n      </div>\n      <ng-template #elseBlock>\n          <div class=\"jumbotron\" id=\"step2\" style=\"background-image:linear-gradient(45deg, #0000ff 0%, #00ffcc 100%);\">\n              <div style=\"text-align:center\"  >\n                  <p style=\"color: wheat\">Verify Your Account</p>\n                  <input type=\"text\" class=\"form-control\" style=\"text-align:center\" value=\"{{account}}\" id=\"acc\" readonly><br>\n                 </div> <div class=\"form-group form-check\" style=\"text-align:center\">\n                 <label class=\"form-check-label\"><input class=\"form-check-input\" type=\"checkbox\" id=\"verify\"><p  style=\"color: wheat\">Yes, I Agree</p></label><br><button (click)=\"validate()\">Proceed</button></div></div>\n      </ng-template>\n      </div>\n    <div class=\"col-sm-3\">\n        \n    </div>\n  </div>  \n</div>\n</body>\n</html>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_contract_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/contract.service */ "./src/app/services/contract.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(cs, cookie, route) {
        this.cs = cs;
        this.cookie = cookie;
        this.route = route;
        var state = this.cookie.check('Secret_key');
        if (state == false) {
            console.log(state);
        }
        else {
            this.route.navigate(['service']);
        }
        var ins = new _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]();
        ins.hide();
    }
    LoginComponent.prototype.fetch_account = function (private_key) {
        var _this = this;
        if (private_key.length == 64) {
            this.cs.getAccount(private_key).then(function (account) {
                _this.account = account;
                _this.key = private_key;
                _this.canshow = true;
            });
        }
        else {
            alert("Invalid Key");
        }
    };
    LoginComponent.prototype.validate = function () {
        if (document.getElementById('verify').checked != false) {
            this.cs.set_cookie(this.key).then(function (result) {
                if (result == true) {
                }
                else {
                    alert("Invalid Key");
                }
            });
            this.route.navigate(['service']);
        }
        else {
            alert('Please Verify your Account');
        }
    };
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_contract_service__WEBPACK_IMPORTED_MODULE_1__["ContractService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/metamask-error/metamask-error.component.css":
/*!*************************************************************!*\
  !*** ./src/app/metamask-error/metamask-error.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/metamask-error/metamask-error.component.html":
/*!**************************************************************!*\
  !*** ./src/app/metamask-error/metamask-error.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\r\n\t<head>\r\n\t\t<title>Ethereum Account Connectivity Error Page</title>\r\n\t</head>\r\n\t<body style=\"margin:75px  750px\"> \r\n\t\t <img src=\"./assets/metamask_logo.png\"/> \r\n\r\n\t\t\t<p>\r\n\t\t\t\t<br>There was an error while fetching your account.\r\n\t\t\t\t<br>Make sure your Ethereum client is configured correctly\r\n\r\n\t\t\t\t<br>Tips:\r\n\t\t\t\t<br>Ensure you unlocked your MetaMask plugin.\r\n\t\t\t\t<br>If you don't have MetaMask plugin install here: \r\n\t\t\t\t<br><a href =\"https://metamask.io/ \">https://metamask.io/</a>\r\n\t\t\t</p>\r\n\r\n\t</body>\r\n</html>"

/***/ }),

/***/ "./src/app/metamask-error/metamask-error.component.ts":
/*!************************************************************!*\
  !*** ./src/app/metamask-error/metamask-error.component.ts ***!
  \************************************************************/
/*! exports provided: MetamaskErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetamaskErrorComponent", function() { return MetamaskErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_contract_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/contract.service */ "./src/app/services/contract.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MetamaskErrorComponent = /** @class */ (function () {
    function MetamaskErrorComponent(cs, route) {
        this.cs = cs;
        this.route = route;
    }
    MetamaskErrorComponent.prototype.ngOnInit = function () {
        // let meta = this;
        // this.id1 = setInterval(function() {
        //   if (typeof window.web3 !== 'undefined') {
        //     meta._web3 = new Web3(window.web3.currentProvider);
        //     if (meta._web3.eth.accounts[0] !== undefined) {
        //       meta.route.navigate(['service']);
        //     }
        //   }
        //   else
        //   {
        //     window.location.reload()
        //   }
        // }, 200);
    };
    MetamaskErrorComponent.prototype.ngOnDestroy = function () {
        if (this.id1) {
            clearInterval(this.id1);
        }
    };
    MetamaskErrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-metamask-error',
            template: __webpack_require__(/*! ./metamask-error.component.html */ "./src/app/metamask-error/metamask-error.component.html"),
            styles: [__webpack_require__(/*! ./metamask-error.component.css */ "./src/app/metamask-error/metamask-error.component.css")]
        }),
        __metadata("design:paramtypes", [_services_contract_service__WEBPACK_IMPORTED_MODULE_2__["ContractService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], MetamaskErrorComponent);
    return MetamaskErrorComponent;
}());



/***/ }),

/***/ "./src/app/purchase/Unit.js":
/*!**********************************!*\
  !*** ./src/app/purchase/Unit.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Minified by jsDelivr using UglifyJS v3.1.10.
 * Original file: /npm/ethjs-unit@0.1.6/lib/index.js
 * 
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
function getValueOfUnit(e){var t=e?e.toLowerCase():"ether",n=unitMap[t];if("string"!=typeof n)throw new Error("[ethjs-unit] the unit provided "+e+" doesn't exists, please use the one of the following units "+JSON.stringify(unitMap,null,2));return new BN(n,10)}function numberToString(e){if("string"==typeof e){if(!e.match(/^-?[0-9.]+$/))throw new Error("while converting number to string, invalid number value '"+e+"', should be a number matching (^-?[0-9.]+).");return e}if("number"==typeof e)return String(e);if("object"==typeof e&&e.toString&&(e.toTwos||e.dividedToIntegerBy))return e.toPrecision?String(e.toPrecision()):e.toString(10);throw new Error("while converting number to string, invalid number value '"+e+"' type "+typeof e+".")}function fromWei(e,t,n){var r=numberToBN(e),i=r.lt(zero),o=getValueOfUnit(t),u=unitMap[t].length-1||1,a=n||{};i&&(r=r.mul(negative1));for(var g=r.mod(o).toString(10);g.length<u;)g="0"+g;a.pad||(g=g.match(/^([0-9]*[1-9]|0)(0*)/)[1]);var l=r.div(o).toString(10);a.commify&&(l=l.replace(/\B(?=(\d{3})+(?!\d))/g,","));var h=l+("0"==g?"":"."+g);return i&&(h="-"+h),h}function toWei(e,t){var n=numberToString(e),r=getValueOfUnit(t),i=unitMap[t].length-1||1,o="-"===n.substring(0,1);if(o&&(n=n.substring(1)),"."===n)throw new Error("[ethjs-unit] while converting number "+e+" to wei, invalid value");var u=n.split(".");if(u.length>2)throw new Error("[ethjs-unit] while converting number "+e+" to wei,  too many decimal points");var a=u[0],g=u[1];if(a||(a="0"),g||(g="0"),g.length>i)throw new Error("[ethjs-unit] while converting number "+e+" to wei, too many decimal places");for(;g.length<i;)g+="0";a=new BN(a),g=new BN(g);var l=a.mul(r).add(g);return o&&(l=l.mul(negative1)),new BN(l.toString(10),10)}var BN=__webpack_require__(/*! bn.js */ "./node_modules/bn.js/lib/bn.js"),numberToBN=__webpack_require__(/*! number-to-bn */ "./node_modules/number-to-bn/src/index.js"),zero=new BN(0),negative1=new BN(-1),unitMap={noether:"0",wei:"1",kwei:"1000",Kwei:"1000",babbage:"1000",femtoether:"1000",mwei:"1000000",Mwei:"1000000",lovelace:"1000000",picoether:"1000000",gwei:"1000000000",Gwei:"1000000000",shannon:"1000000000",nanoether:"1000000000",nano:"1000000000",szabo:"1000000000000",microether:"1000000000000",micro:"1000000000000",finney:"1000000000000000",milliether:"1000000000000000",milli:"1000000000000000",ether:"1000000000000000000",kether:"1000000000000000000000",grand:"1000000000000000000000",mether:"1000000000000000000000000",gether:"1000000000000000000000000000",tether:"1000000000000000000000000000000"};module.exports={unitMap:unitMap,numberToString:numberToString,getValueOfUnit:getValueOfUnit,fromWei:fromWei,toWei:toWei};
//# sourceMappingURL=/sm/1fc7a0364448e3cf5e7bbf685f048c7913efeee7e342f02ed760bcf74d1a620f.map

/***/ }),

/***/ "./src/app/purchase/purchase.component.css":
/*!*************************************************!*\
  !*** ./src/app/purchase/purchase.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/purchase/purchase.component.html":
/*!**************************************************!*\
  !*** ./src/app/purchase/purchase.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<script defer src=\"/static/fontawesome/fontawesome-all.js\"></script>\r\n<script src=\"../bootstrap.min.css\"></script>\r\n<script src=\"../bootstrap.min.js\"></script>\r\n<div class=\"container\">\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-5\">     \r\n\r\n      <div class=\"col-sm-12\">\r\n        <div>\r\n        <h1 style=\"color:orange\">Purchase Tokens Here<p class=\"\tglyphicon glyphicon-hand-down\"></p></h1>\r\n      </div>\r\n\r\n          <br>\r\n          <h2>Equivalent Ether Value<img src=\"assets\\if_ETH_1175230.png\" style=\"height:35px\"></h2>\r\n          <form>\r\n            <div class=\"form-group\">\r\n              <label for=\"email\" style=\"color:orangered\">Ether</label>&nbsp;<p class=\"glyphicon glyphicon-transfer\"></p>\r\n              <input class=\"form-control\" id='ether' style=\"color:green\" readonly>\r\n            </div>\r\n          </form> \r\n      </div>\r\n    \r\n      \r\n         \r\n      <div class=\"col-sm-12\">\r\n          <h2>Equivalent USD Dollar<p class=\"glyphicon glyphicon-usd\"></p></h2> \r\n          <form>\r\n            <div class=\"form-group\">\r\n              <label for=\"email\" style=\"color:brown\">Dollar</label>&nbsp;<p class=\"glyphicon glyphicon-transfer\"></p>\r\n              <input type=\"email\" class=\"form-control\" id=\"dollar\" style=\"color:rgb(19, 0, 128)\" readonly>\r\n            </div>\r\n    \r\n          </form> \r\n      </div>\r\n\r\n      <div class=\"col-sm-12\"> \r\n          <h2>Get Native Tokens </h2>\r\n            <div class=\"form-group\">\r\n              <label for=\"tkn\">Tokens:</label>\r\n              <input type=\"text\" id = \"t1\" class=\"form-control\" #token placeholder=\"Enter no of tokens\" (input)=\"set(token.value)\">\r\n            </div>\r\n            <div class=\"form-group form-check\">\r\n              <label class=\"form-check-label\">\r\n                <input class=\"form-check-input\" type=\"checkbox\" id=\"verify\"> Confirm\r\n              </label>\r\n            </div>\r\n            <div #d1>\r\n            <button  class=\"btn btn-success\" #b1 (click)=\"Purchase(token.value)\">Buy</button>\r\n          </div>\r\n          <div>\r\n            <br>\r\n            <h4><p id='p1' style=\"color:red\"></p></h4>\r\n            <h4><p id='p2' style=\"color:green\"></p></h4>\r\n          </div>\r\n         </div> \r\n\r\n  </div>\r\n  <ngx-spinner></ngx-spinner>\r\n \r\n</div>  \r\n\r\n"

/***/ }),

/***/ "./src/app/purchase/purchase.component.ts":
/*!************************************************!*\
  !*** ./src/app/purchase/purchase.component.ts ***!
  \************************************************/
/*! exports provided: PurchaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseComponent", function() { return PurchaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_contract_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/contract.service */ "./src/app/services/contract.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var unit = __webpack_require__(/*! ./Unit.js */ "./src/app/purchase/Unit.js");
var PurchaseComponent = /** @class */ (function () {
    function PurchaseComponent(cs, http, route, spin, cookie) {
        this.cs = cs;
        this.http = http;
        this.route = route;
        this.spin = spin;
        this.cookie = cookie;
        this.i = "1027";
        document.getElementById('navbar').hidden = true;
        var ins = new _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]();
        ins.change();
        this.Fetch_values();
        var obj = new _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"](cs, cookie, route);
        obj.fetch_balances();
    }
    PurchaseComponent.prototype.set = function (count) {
        this.Fetch_values();
        if (this.Indtoken_in_ether == "NaN") {
            this.set(count);
        }
        this.eth = count * this.Indtoken_in_ether;
        this.doll = count * this.usd_price;
        document.getElementById('ether').value = this.eth;
        document.getElementById('dollar').value = this.doll;
        if (document.getElementById('ether').value == "NaN") {
            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Please Re-enter the value");
        }
    };
    PurchaseComponent.prototype.Purchase = function (tokens) {
        var _this = this;
        if (tokens != '') {
            if (document.getElementById('verify').checked == true) {
                document.getElementById("p2").innerHTML = "Transaction in Progress...";
                document.getElementById("p1").innerHTML = "";
                this.ether_for_total_tokens = tokens * this.Indtoken_in_ether;
                this.spin.show();
                // var a = this.Indtoken_in_ether.toString().split(".")[0]
                var a = this.Indtoken_in_ether.toString().split('.')[1];
                var b = this.Indtoken_in_ether.toString().split('.')[0];
                var temp1 = a.substring(0, 18);
                var amt = b + "." + temp1;
                var argument = unit.toWei(amt.toString(), 'ether');
                // alert("One Token" + argument)
                // alert("in Ether"+ unit.fromWei(argument, 'ether'))
                // this.spin.hide()
                // return
                var x = this.ether_for_total_tokens.toString().split(".")[1];
                var y = this.ether_for_total_tokens.toString().split(".")[0];
                var temp2 = x.substring(0, 18);
                var total = y + "." + temp2;
                var msgvalue = unit.toWei(total.toString(), 'ether');
                // alert("Total"+"--"+msgvalue)
                // alert("Check"+"--"+msgvalue/argument)
                this.cs.get_cookie().then(function (input_key) {
                    _this.cs.buy_token(input_key, argument, msgvalue).then(function (result) {
                        _this.spin.hide();
                        if (result == 1) {
                            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Tokens Purchased Successfully...!");
                            var instance = new _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"](_this.cs, _this.cookie, _this.route);
                            instance.fetch_balances();
                            document.getElementById("p2").innerHTML = " ";
                            document.getElementById("t1").value = '';
                            document.getElementById('verify').checked == false;
                            // this.hc.fetch_balances()
                            _this.route.navigate(['service']);
                        }
                        else if (result == 0) {
                            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("You Rejected this Transaction...!");
                            document.getElementById("t1").value = '';
                            document.getElementById('verify').checked == false;
                        }
                        else if (result == 2) {
                            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Transaction failed...!");
                            document.getElementById("t1").value = '';
                            document.getElementById('verify').checked == false;
                        }
                    });
                });
            }
            else {
                document.getElementById("p2").innerHTML = "";
                document.getElementById("p1").innerHTML = "Please confirm your transaction";
            }
        }
        else {
            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()('Please Enter a Value');
        }
    };
    PurchaseComponent.prototype.Fetch_values = function () {
        var _this = this;
        this.http.get('https://api.coinmarketcap.com/v2/ticker/1027/')
            .subscribe(function (resp) {
            _this.resul = resp;
            _this.ethereum_price = _this.resul.data.quotes.USD.price;
        });
        this.http.get('https://api.coinmarketcap.com/v2/ticker/1967/')
            .subscribe(function (res) {
            _this.result = res;
            _this.usd_price = _this.result.data.quotes.USD.price;
            _this.tot_supply = _this.result.data.total_supply;
            _this.Indtoken_in_ether = (_this.usd_price * (1 / _this.ethereum_price));
        });
    };
    PurchaseComponent.prototype.ngOnInit = function () {
        // let meta = this;
        // meta.cs.getAccount().then(acc => {
        //     this.account = acc;
        //     meta.id1 = setInterval(function() {
        //      if (typeof window.web3 !== 'undefined') {
        //          meta._web3 = new Web3(window.web3.currentProvider);
        //          if (meta._web3.eth.accounts[0] !== meta.account) {
        //              meta.account = meta._web3.eth.accounts[0];
        //              if (meta._web3.eth.accounts[0] === undefined) {
        //                  meta.route.navigate(['metamask']);
        //                  clearInterval(this.interval);
        //              }
        //               else 
        //              {
        //               window.location.reload(true);
        //              }
        //          }
        //      } else {
        //          meta.route.navigate(['metamask']);
        //      }
        //     }, 200);
        //  });
    };
    PurchaseComponent.prototype.ngOnDestroy = function () {
        if (this.id1) {
            clearInterval(this.id1);
        }
        if (this.id2) {
            clearInterval(this.id2);
        }
    };
    PurchaseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-purchase',
            template: __webpack_require__(/*! ./purchase.component.html */ "./src/app/purchase/purchase.component.html"),
            styles: [__webpack_require__(/*! ./purchase.component.css */ "./src/app/purchase/purchase.component.css")]
        }),
        __metadata("design:paramtypes", [_services_contract_service__WEBPACK_IMPORTED_MODULE_2__["ContractService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])
    ], PurchaseComponent);
    return PurchaseComponent;
}());



/***/ }),

/***/ "./src/app/services/contract.json":
/*!****************************************!*\
  !*** ./src/app/services/contract.json ***!
  \****************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, default */
/***/ (function(module) {

module.exports = [{"anonymous":false,"inputs":[{"indexed":false,"name":"_from","type":"address"},{"indexed":false,"name":"_to","type":"address"},{"indexed":false,"name":"_amount","type":"uint256"}],"name":"Transfer_amount","type":"event"},{"constant":false,"inputs":[{"name":"_service_name","type":"string"},{"name":"_service_price","type":"uint256"}],"name":"add_service","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_service_id","type":"uint256"}],"name":"buy_service","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_rate","type":"uint256"}],"name":"buy_token","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_owner","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"indexed_from","type":"address"},{"indexed":false,"name":"indexed_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"indexed_owner","type":"address"},{"indexed":false,"name":"indexed_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"},{"inputs":[],"payable":true,"stateMutability":"payable","type":"constructor"},{"constant":false,"inputs":[{"name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"_totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"admin","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"client_addresses","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"service_details","outputs":[{"name":"service_name","type":"string"},{"name":"service_price","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"service_id","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token_contract_balance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"user_services","outputs":[{"name":"token_value","type":"uint256"},{"name":"service_avail_time","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}];

/***/ }),

/***/ "./src/app/services/contract.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/contract.service.ts ***!
  \**********************************************/
/*! exports provided: ContractService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractService", function() { return ContractService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ethereumjs_tx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ethereumjs-tx */ "./node_modules/ethereumjs-tx/es5/index.js");
/* harmony import */ var ethereumjs_tx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ethereumjs_tx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! web3 */ "./node_modules/web3/src/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var Buffer = __webpack_require__(/*! buffer/ */ "./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer;
var contractAbi = __webpack_require__(/*! ./contract.json */ "./src/app/services/contract.json");

var ContractService = /** @class */ (function () {
    function ContractService(spin, route, cookie) {
        this.spin = spin;
        this.route = route;
        this.cookie = cookie;
        this.account = null;
        this.web3 = null;
        this.acc = null;
        this.contractAddress = "0xc9de0da933af20ecb53bd50814f21005e37a8f87";
        this.web3 = new web3__WEBPACK_IMPORTED_MODULE_4___default.a(new web3__WEBPACK_IMPORTED_MODULE_4___default.a.providers.HttpProvider('https://ropsten.infura.io/Vr1GWcLG0XzcdrZHWMPu'));
        this.contract = new this.web3.eth.Contract(contractAbi, this.contractAddress, {
            gaslimit: 3000000,
        });
    }
    ContractService.prototype.set_cookie = function (input_key) {
        return __awaiter(this, void 0, void 0, function () {
            var indor;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        indor = this;
                        indor.cookie.set('Secret_key', input_key);
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                indor.check_cookie('Secret_key').then(function (result) {
                                    if (input_key === result) {
                                        resolve(true);
                                    }
                                    else {
                                        resolve(false);
                                    }
                                });
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ContractService.prototype.check_cookie = function (input_key) {
        return __awaiter(this, void 0, void 0, function () {
            var indor;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        indor = this;
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                var key = indor.cookie.get('Secret_key');
                                resolve(key);
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ContractService.prototype.get_cookie = function () {
        return __awaiter(this, void 0, void 0, function () {
            var indor;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        indor = this;
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                var key = indor.cookie.get('Secret_key');
                                resolve(key);
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ContractService.prototype.getAccount = function (input_key) {
        return __awaiter(this, void 0, void 0, function () {
            var indor;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        indor = this;
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                var obj = indor.web3.eth.accounts.privateKeyToAccount('0x' + input_key);
                                var account = obj['address'];
                                resolve(account);
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ContractService.prototype.getUserBalance = function (account) {
        return __awaiter(this, void 0, void 0, function () {
            var indor;
            return __generator(this, function (_a) {
                indor = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        indor.web3.eth.getBalance(account, function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            else {
                                resolve(indor.web3.utils.fromWei(result, 'ether'));
                            }
                        });
                    })];
            });
        });
    };
    //purchase token
    ContractService.prototype.buy_token = function (input_key, argument, msgvalue) {
        return __awaiter(this, void 0, void 0, function () {
            var indor;
            return __generator(this, function (_a) {
                indor = this;
                indor.spin.show();
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        // var arg1= indor.web3.utils.toWei(Indtoken_in_ether.toString(),'ether').split(".")[0]
                        // var msgvalue = this.web3.utils.toWei(ether_for_total_tokens.toString(),'ether').split(".")[0]
                        var privatekeydetails = indor.web3.eth.accounts.privateKeyToAccount("0x" + input_key);
                        var senderaddress = privatekeydetails["address"];
                        indor.web3.eth.getTransactionCount(senderaddress, function (err, result) {
                            var nonce = result.toString(16);
                            var private_key = Buffer.from(input_key, 'hex');
                            var contract_function = indor.contract.methods.buy_token(argument);
                            var contract_function_abi = contract_function.encodeABI();
                            var txParams = {
                                nonce: '0x' + nonce,
                                gasPrice: 0x4A817C800 * 1.40,
                                gasLimit: 4000000,
                                from: senderaddress,
                                to: indor.contractAddress,
                                value: msgvalue,
                                data: contract_function_abi
                            };
                            var tx = new ethereumjs_tx__WEBPACK_IMPORTED_MODULE_3__(txParams);
                            tx.sign(private_key);
                            var serializedtx = tx.serialize();
                            console.log("Getting receipt...");
                            indor.web3.eth.sendSignedTransaction('0x' + serializedtx.toString('hex'), function (err, result) {
                                if (err != null) {
                                    console.log("err");
                                    resolve(0);
                                }
                                else {
                                    indor.hash(result).then(function (res) {
                                        if (res == true) {
                                            resolve(1);
                                        }
                                        else if (res == false) {
                                            resolve(2);
                                        }
                                    });
                                }
                            });
                        });
                    })];
            });
        });
    };
    //withdraw token
    ContractService.prototype.withdraw = function (privatekey, amount) {
        return __awaiter(this, void 0, void 0, function () {
            var indor;
            return __generator(this, function (_a) {
                indor = this;
                indor.spin.show();
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var privatekeydetails = indor.web3.eth.accounts.privateKeyToAccount("0x" + privatekey);
                        var senderaddress = privatekeydetails["address"];
                        indor.web3.eth.getTransactionCount(senderaddress, function (err, result) {
                            var nonce = result.toString(16);
                            var private_key = Buffer.from(privatekey, 'hex');
                            var contract_function = indor.contract.methods.withdraw(amount);
                            var contract_function_abi = contract_function.encodeABI();
                            var txParams = {
                                nonce: '0x' + nonce,
                                gasPrice: '0x4A817C800',
                                gasLimit: 4000000,
                                from: senderaddress,
                                to: indor.contractAddress,
                                value: '0x00',
                                data: contract_function_abi
                            };
                            var tx = new ethereumjs_tx__WEBPACK_IMPORTED_MODULE_3__(txParams);
                            tx.sign(private_key);
                            var serializedtx = tx.serialize();
                            console.log("Getting receipt...");
                            indor.web3.eth.sendSignedTransaction('0x' + serializedtx.toString('hex'), function (err, result) {
                                if (err != null) {
                                    console.log("err");
                                    resolve(0);
                                }
                                else {
                                    indor.hash(result).then(function (res) {
                                        if (res == true) {
                                            resolve(1);
                                        }
                                        else if (res == false) {
                                            resolve(2);
                                        }
                                    });
                                }
                            });
                        });
                    })];
            });
        });
    };
    //token balance
    ContractService.prototype.token_contract_balance = function () {
        return __awaiter(this, void 0, void 0, function () {
            var indor;
            return __generator(this, function (_a) {
                indor = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        indor.contract.methods.token_contract_balance().call(function (err, result) {
                            if (err) {
                                console.log(err);
                                reject(err);
                            }
                            else {
                                var out = result / 1000000000000000000;
                                resolve(out);
                            }
                        });
                    })];
            });
        });
    };
    //transfer
    ContractService.prototype.transfer = function (input_key, tokens) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var meta;
            return __generator(this, function (_a) {
                meta = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var tkn_address = 0x88b9cf7bea8f50847e300034b3e28f6279b5829e;
                        var privateKey = Buffer(input_key, 'hex');
                        var obj = _this.web3.eth.accounts.privateKeyToAccount('0x' + input_key);
                        var senderAddress = obj['address'];
                        var contractFunction = _this.contract.methods.transfer(tkn_address, tokens);
                        var functionAbi = contractFunction.encodeABI();
                        meta.web3.eth.getTransactionCount(senderAddress, function (err, nonce) {
                            var txParams = {
                                nonce: '0x' + nonce,
                                gasPrice: '0x4A817C800',
                                gasLimit: 4000000,
                                from: senderAddress,
                                to: meta.contractAddress,
                                value: '',
                                data: functionAbi
                            };
                            var tx = new ethereumjs_tx__WEBPACK_IMPORTED_MODULE_3__(txParams);
                            tx.sign(privateKey);
                            var serializedTx = tx.serialize();
                            meta.web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'), function (error, receipt) {
                                if (error) {
                                    reject(error) && resolve(0);
                                }
                                console.log(receipt);
                                meta.hash(receipt['transactionHash']).then(function (result) {
                                    if (result == true) {
                                        resolve(1);
                                    }
                                    else if (result == false) {
                                        resolve(2);
                                    }
                                });
                            });
                        });
                    })];
            });
        });
    };
    //create_service 
    ContractService.prototype.add_service = function (input_key, name, price) {
        return __awaiter(this, void 0, void 0, function () {
            var indor;
            return __generator(this, function (_a) {
                indor = this;
                indor.spin.show();
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var privatekeydetails = indor.web3.eth.accounts.privateKeyToAccount("0x" + input_key);
                        var senderaddress = privatekeydetails["address"];
                        indor.web3.eth.getTransactionCount(senderaddress, function (err, result) {
                            var nonce = result.toString(16);
                            var private_key = Buffer.from(input_key, 'hex');
                            var contract_function = indor.contract.methods.add_service(name, indor.web3.utils.toWei(price.toString(), 'ether'));
                            var contract_function_abi = contract_function.encodeABI();
                            var txParams = {
                                nonce: '0x' + nonce,
                                gasPrice: 0x4A817C800 * 1.40,
                                gasLimit: 4000000,
                                from: senderaddress,
                                to: indor.contractAddress,
                                value: '0x00',
                                data: contract_function_abi
                            };
                            var tx = new ethereumjs_tx__WEBPACK_IMPORTED_MODULE_3__(txParams);
                            tx.sign(private_key);
                            var serializedtx = tx.serialize();
                            console.log("Getting receipt...");
                            indor.web3.eth.sendSignedTransaction('0x' + serializedtx.toString('hex'), function (err, result) {
                                if (err != null) {
                                    console.log("err");
                                    resolve(0);
                                }
                                else {
                                    indor.hash(result).then(function (res) {
                                        if (res == true) {
                                            resolve(1);
                                        }
                                        else if (res == false) {
                                            resolve(2);
                                        }
                                    });
                                }
                            });
                        });
                    })];
            });
        });
    };
    //get service id
    ContractService.prototype.service_id = function () {
        return __awaiter(this, void 0, void 0, function () {
            var indor;
            return __generator(this, function (_a) {
                indor = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        indor.contract.methods.service_id().call(function (err, result) {
                            if (err != null) {
                                // resolve(result)
                                reject(err);
                            }
                            else {
                                var array = [];
                                for (var i = 1; i <= result; i++) {
                                    array.push(i);
                                }
                                resolve(array);
                                console.log("RESULT" + result);
                            }
                        });
                    })];
            });
        });
    };
    //get service details
    ContractService.prototype.service_details = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var indor;
            return __generator(this, function (_a) {
                indor = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        indor.contract.methods.service_details(id).call(function (err, result) {
                            if (err) {
                                // resolve(result)  
                                reject(err);
                            }
                            else {
                                resolve(result);
                            }
                        });
                    })];
            });
        });
    };
    //buy_service
    ContractService.prototype.buy_service = function (input_key, id) {
        return __awaiter(this, void 0, void 0, function () {
            var indor;
            return __generator(this, function (_a) {
                indor = this;
                indor.spin.show();
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var privatekeydetails = indor.web3.eth.accounts.privateKeyToAccount("0x" + input_key);
                        var senderaddress = privatekeydetails["address"];
                        indor.web3.eth.getTransactionCount(senderaddress, function (err, result) {
                            var nonce = result.toString(16);
                            var private_key = Buffer.from(input_key, 'hex');
                            var contract_function = indor.contract.methods.buy_service(id);
                            var contract_function_abi = contract_function.encodeABI();
                            var txParams = {
                                nonce: '0x' + nonce,
                                gasPrice: 0x4A817C800 * 1.40,
                                gasLimit: 4000000,
                                from: senderaddress,
                                to: indor.contractAddress,
                                value: '0x00',
                                data: contract_function_abi
                            };
                            var tx = new ethereumjs_tx__WEBPACK_IMPORTED_MODULE_3__(txParams);
                            tx.sign(private_key);
                            var serializedtx = tx.serialize();
                            console.log("Getting receipt...");
                            indor.web3.eth.sendSignedTransaction('0x' + serializedtx.toString('hex'), function (err, result) {
                                if (err != null) {
                                    console.log("err");
                                    resolve(0);
                                }
                                else {
                                    indor.hash(result).then(function (res) {
                                        if (res == true) {
                                            resolve(1);
                                        }
                                        else if (res == false) {
                                            resolve(2);
                                        }
                                    });
                                }
                            });
                        });
                    })];
            });
        });
    };
    //hashing
    ContractService.prototype.hash = function (a) {
        return __awaiter(this, void 0, void 0, function () {
            var meta;
            return __generator(this, function (_a) {
                meta = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var accountInterval = setInterval(function () {
                            meta.web3.eth.getTransactionReceipt(a, function (err, result) {
                                if (err != null) {
                                    resolve(err);
                                }
                                if (result !== null) {
                                    clearInterval(accountInterval);
                                    if (result.status == 0x1) {
                                        clearInterval(accountInterval);
                                        resolve(true);
                                    }
                                    else {
                                        resolve(false);
                                    }
                                }
                            });
                        }, 100);
                    })];
            });
        });
    };
    //check admin
    ContractService.prototype.check_admin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var indor;
            return __generator(this, function (_a) {
                indor = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        indor.get_cookie().then(function (address) {
                            indor.getAccount(address).then(function (account) {
                                indor.contract.methods.admin().call(function (err, result) {
                                    if (err) {
                                        reject(err);
                                    }
                                    else if (account == result) {
                                        resolve(true);
                                    }
                                    else {
                                        resolve(false);
                                    }
                                });
                            });
                        });
                    })];
            });
        });
    };
    //user_services
    ContractService.prototype.user_services = function (input_key, id) {
        return __awaiter(this, void 0, void 0, function () {
            var indor, obj, senderAddress;
            return __generator(this, function (_a) {
                indor = this;
                obj = indor.web3.eth.accounts.privateKeyToAccount('0x' + input_key, 'hex');
                senderAddress = obj['address'];
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        indor.contract.methods.user_services(senderAddress, id).call(function (err, result) {
                            if (err) {
                                // resolve(result)
                                reject(err);
                            }
                            else {
                                resolve(result);
                            }
                        });
                    })];
            });
        });
    };
    //balance of
    ContractService.prototype.balanceOf = function (account) {
        return __awaiter(this, void 0, void 0, function () {
            var indor;
            return __generator(this, function (_a) {
                indor = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        indor.contract.methods.balanceOf(account).call(function (err, result) {
                            if (err) {
                                // resolve(result)
                                reject(err);
                            }
                            else {
                                resolve(result / 1000000000000000000);
                            }
                        });
                    })];
            });
        });
    };
    ContractService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])
    ], ContractService);
    return ContractService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Indorse\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
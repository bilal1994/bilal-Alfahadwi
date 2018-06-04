(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/app/addskill/addskill.component.css":
/*!*************************************************!*\
  !*** ./src/app/addskill/addskill.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div h3{ \r\n\r\ncolor: #666;\r\nbackground-color:#9c88ff;\r\n\r\n } \r\ndiv .uk-margin .uk-textarea { \r\n    background-image: url(/assets/0358027fa35ca15.jpg )\r\n    \r\n} \r\n.uk-padding {\r\n    background-color:#2c2c54;\r\n    opacity: 1;\r\n    font-size: 16px;\r\n\r\nfont-weight: 200;\r\n\r\nline-height: 1.5;\r\nwidth: auto;\r\n} \r\n.uk-margin   h4{ \r\nwidth: auto;\r\nheight: auto;\r\ncolor: #000;\r\n} \r\n.uk-card {\r\nbackground-color:#273c75;\r\n}\r\n"

/***/ }),

/***/ "./src/app/addskill/addskill.component.html":
/*!**************************************************!*\
  !*** ./src/app/addskill/addskill.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-padding\">\n\n    <div class=\"uk-card uk-card-default uk-card-body  \">\n        <h3 class=\"uk-card-title\">اضافة </h3>\n\n\n\n        <fieldset class=\"uk-fieldset\">\n\n            <div class=\"uk-margin\">\n                <input class=\"uk-input\" type=\"text\" placeholder=\"الاسم\" name=\"name\" [(ngModel)]=\"data.name\">\n            </div>\n            \n            <div class=\"uk-margin\">\n                <input class=\"uk-input\" type=\"text\" placeholder=\"المرحلة  \" name=\"stage\" [(ngModel)]=\"data.stage\">\n            </div>\n\n            <div class=\"uk-margin\">\n                <input class=\"uk-input\" type=\"text\" placeholder=\"رقم الهاتف\" name=\"phone\" [(ngModel)]=\"data.phone\">\n            </div>\n\n            <div class=\"uk-margin\">\n                <input class=\"uk-input\" type=\"text\" placeholder=\"رقم هاتف ولي الامر \" name=\"fatherphone\" [(ngModel)]=\"data.fatherphone\">\n            </div>\n            <div class=\"uk-margin\">\n                <input class=\"uk-input\" type=\"text\" placeholder=\"رقم الطواريء\" name=\"Emergencytelephon\" [(ngModel)]=\"data.Emergencytelephon\">\n            </div>\n\n            <div class=\"uk-margin\">\n                <input class=\"uk-input\" type=\"text\" placeholder=\"العنوان \" name=\"addres\" [(ngModel)]=\"data.addres\">\n            </div>\n\n\n\n            <div class=\"uk-margin\">\n                <textarea class=\"uk-textarea\" rows=\"5\" placeholder=\"ملاحظات\" name=\"text\" [(ngModel)]=\"data.text\"></textarea>\n            </div>\n\n\n\n            <div class=\"uk-margin\">\n                <button class=\"uk-button uk-button-primary\" (click)=\"insertSkill()\"><h4>حفظ واضافة</h4></button>\n           \n            </div>\n\n        </fieldset>\n\n\n\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/addskill/addskill.component.ts":
/*!************************************************!*\
  !*** ./src/app/addskill/addskill.component.ts ***!
  \************************************************/
/*! exports provided: addskillComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addskillComponent", function() { return addskillComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./src/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./src/node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./src/node_modules/angularfire2/auth/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./src/node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var addskillComponent = /** @class */ (function () {
    function addskillComponent(fire, db, router) {
        this.fire = fire;
        this.db = db;
        this.router = router;
        // name:string='bilala'
        // stage:string
        // phone:string
        // phonenumber:string
        // phonenumber1:string
        this.data = {
            name: '',
            stage: '',
            phone: '',
            fatherphone: '',
            Emergencytelephon: '',
            addres: '',
            text: '',
        };
        this.itemList = db.list('Skills');
        this.email = localStorage.getItem('email');
        this.myid = localStorage.getItem('uid');
        var user = localStorage.getItem('email');
        this.email = user;
        this.uid = localStorage.getItem('uid');
        console.log('uid: ' + this.uid);
    }
    addskillComponent.prototype.ngOnInit = function () {
        console.log(this.email);
        console.log(this.myid);
    };
    addskillComponent.prototype.insertSkill = function () {
        this.itemList.push({
            name: this.data.name,
            stage: this.data.stage,
            phone: this.data.phone,
            fatherphone: this.data.fatherphone,
            Emergencytelephon: this.data.Emergencytelephon,
            addres: this.data.addres,
            text: this.data.text,
            email: this.email,
            uid: this.myid
        });
        this.router.navigate(['/login']);
    };
    addskillComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-addskill',
            template: __webpack_require__(/*! ./addskill.component.html */ "./src/app/addskill/addskill.component.html"),
            styles: [__webpack_require__(/*! ./addskill.component.css */ "./src/app/addskill/addskill.component.css")]
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], addskillComponent);
    return addskillComponent;
}());



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

module.exports = "\r\n<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>\r\n\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./src/node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = ' fawaz bilal ';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bilal-navbar',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./src/node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./src/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./src/node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _assets_assets_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/assets.component */ "./src/app/assets/assets.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./src/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _addskill_addskill_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./addskill/addskill.component */ "./src/app/addskill/addskill.component.ts");
/* harmony import */ var _skill_skill_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./skill/skill.component */ "./src/app/skill/skill.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _myskill_myskill_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./myskill/myskill.component */ "./src/app/myskill/myskill.component.ts");
/* harmony import */ var _my_kindergarten_my_kindergarten_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./my-kindergarten/my-kindergarten.component */ "./src/app/my-kindergarten/my-kindergarten.component.ts");
/* harmony import */ var _ngmodule_ngmodule_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ngmodule/ngmodule.component */ "./src/app/ngmodule/ngmodule.component.ts");
/* harmony import */ var _ngmodel_ngmodel_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ngmodel/ngmodel.component */ "./src/app/ngmodel/ngmodel.component.ts");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angularfire2/storage */ "./src/node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angularfire2 */ "./src/node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angularfire2/database */ "./src/node_modules/angularfire2/database/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! angularfire2/auth */ "./src/node_modules/angularfire2/auth/index.js");
/* harmony import */ var _mylogin_mylogin_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./mylogin/mylogin.component */ "./src/app/mylogin/mylogin.component.ts");
/* harmony import */ var _myregister_myregister_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./myregister/myregister.component */ "./src/app/myregister/myregister.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");
/* harmony import */ var _userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./userprofile/userprofile.component */ "./src/app/userprofile/userprofile.component.ts");
/* harmony import */ var _myfonte_myfonte_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./myfonte/myfonte.component */ "./src/app/myfonte/myfonte.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'addskill', component: _addskill_addskill_component__WEBPACK_IMPORTED_MODULE_8__["addskillComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"] },
    { path: 'mylogin', component: _mylogin_mylogin_component__WEBPACK_IMPORTED_MODULE_21__["MyloginComponent"] },
    { path: 'myskill', component: _myskill_myskill_component__WEBPACK_IMPORTED_MODULE_12__["MyskillComponent"] },
    { path: 'myKindergarten', component: _my_kindergarten_my_kindergarten_component__WEBPACK_IMPORTED_MODULE_13__["MyKindergartenComponent"] },
    { path: 'Ngmodule', component: _ngmodule_ngmodule_component__WEBPACK_IMPORTED_MODULE_14__["NgmoduleComponent"] },
    { path: 'mylogin', component: _mylogin_mylogin_component__WEBPACK_IMPORTED_MODULE_21__["MyloginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"] },
    { path: 'details/:id', component: _details_details_component__WEBPACK_IMPORTED_MODULE_23__["DetailsComponent"] },
    { path: 'myregister', component: _myregister_myregister_component__WEBPACK_IMPORTED_MODULE_22__["MyregisterComponent"] },
    { path: 'detail/:id', component: _details_details_component__WEBPACK_IMPORTED_MODULE_23__["DetailsComponent"] },
    { path: 'userprofile', component: _userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_24__["UserprofileComponent"] },
    { path: 'myfonte', component: _myfonte_myfonte_component__WEBPACK_IMPORTED_MODULE_25__["MyfonteComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _assets_assets_component__WEBPACK_IMPORTED_MODULE_6__["AssetsComponent"],
                _addskill_addskill_component__WEBPACK_IMPORTED_MODULE_8__["addskillComponent"],
                _skill_skill_component__WEBPACK_IMPORTED_MODULE_9__["SkillComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"],
                _myskill_myskill_component__WEBPACK_IMPORTED_MODULE_12__["MyskillComponent"],
                _my_kindergarten_my_kindergarten_component__WEBPACK_IMPORTED_MODULE_13__["MyKindergartenComponent"],
                _ngmodule_ngmodule_component__WEBPACK_IMPORTED_MODULE_14__["NgmoduleComponent"],
                _ngmodel_ngmodel_component__WEBPACK_IMPORTED_MODULE_15__["NgmodelComponent"],
                _mylogin_mylogin_component__WEBPACK_IMPORTED_MODULE_21__["MyloginComponent"],
                _myregister_myregister_component__WEBPACK_IMPORTED_MODULE_22__["MyregisterComponent"],
                _details_details_component__WEBPACK_IMPORTED_MODULE_23__["DetailsComponent"],
                _userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_24__["UserprofileComponent"],
                _myfonte_myfonte_component__WEBPACK_IMPORTED_MODULE_25__["MyfonteComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(routes),
                angularfire2__WEBPACK_IMPORTED_MODULE_17__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_19__["environment"].firebase),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                angularfire2_database__WEBPACK_IMPORTED_MODULE_18__["AngularFireDatabaseModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_20__["AngularFireAuthModule"],
                angularfire2_storage__WEBPACK_IMPORTED_MODULE_16__["AngularFireStorageModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/assets/assets.component.css":
/*!*********************************************!*\
  !*** ./src/app/assets/assets.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/assets/assets.component.html":
/*!**********************************************!*\
  !*** ./src/app/assets/assets.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  assets works!\n</p>\n"

/***/ }),

/***/ "./src/app/assets/assets.component.ts":
/*!********************************************!*\
  !*** ./src/app/assets/assets.component.ts ***!
  \********************************************/
/*! exports provided: AssetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetsComponent", function() { return AssetsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./src/node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AssetsComponent = /** @class */ (function () {
    function AssetsComponent() {
    }
    AssetsComponent.prototype.ngOnInit = function () {
    };
    AssetsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-assets',
            template: __webpack_require__(/*! ./assets.component.html */ "./src/app/assets/assets.component.html"),
            styles: [__webpack_require__(/*! ./assets.component.css */ "./src/app/assets/assets.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AssetsComponent);
    return AssetsComponent;
}());



/***/ }),

/***/ "./src/app/details/details.component.css":
/*!***********************************************!*\
  !*** ./src/app/details/details.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/details/details.component.html":
/*!************************************************!*\
  !*** ./src/app/details/details.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"uk-padding\">\n<div class=\"uk-card uk-card-default uk-padding \">\n  <div class=\"uk-card-header\">\n      <div class=\"uk-grid-small uk-flex-middle\" uk-grid>\n          <div class=\"uk-width-auto\">\n              <img class=\"uk-border-circle\" width=\"80\" height=\"80\" src=\"assets/person.png\">\n          </div>\n          <div class=\"uk-width-expand\">\n              <h3 class=\"uk-card-title uk-margin-remove-bottom\">Email:{{data.email}}</h3>\n              <p class=\"uk-text-meta uk-margin-remove-top\">name:{{data.name}}</p>\n          </div>\n      </div>\n  </div>\n  <div class=\"uk-card-body\">\n      <p>{{data.text}}</p>\n  </div>\n  <div class=\"uk-card-footer\">\n\n<p>stage:{{data.stage}}</p>\n<p>phone:{{data.phone}}</p>\n<p>fatherphone:{{data.fatherphone}}</p>\n<p>Emergencytelephon:{{data.Emergencytelephon}}</p>\n<p> addres:{{data. addres}}</p>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/details/details.component.ts":
/*!**********************************************!*\
  !*** ./src/app/details/details.component.ts ***!
  \**********************************************/
/*! exports provided: DetailsComponent, itemListclass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "itemListclass", function() { return itemListclass; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./src/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./src/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./src/node_modules/angularfire2/database/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(db, route) {
        var _this = this;
        this.db = db;
        this.route = route;
        this.itemArray = [];
        this.data = {
            name: '',
            stage: '',
            phone: '',
            fatherphone: '',
            Emergencytelephon: '',
            addres: '',
            text: '',
            email: '',
            uid: ''
        };
        this.route.params.subscribe(function (Params) {
            _this.id = Params;
        });
        this.itemList = db.list('Skills');
        this.itemList.snapshotChanges()
            .subscribe(function (action) {
            action.forEach(function (action) {
                var y = action.payload.toJSON();
                y['$key'] = action.key;
                if (action.key === _this.id['id']) {
                    _this.itemArray.push(y);
                    _this.data.name = _this.itemArray[0]['name'];
                    _this.data.stage = _this.itemArray[0]['stage'];
                    _this.data.phone = _this.itemArray[0]['phone'];
                    _this.data.fatherphone = _this.itemArray[0]['fatherphone'];
                    _this.data.Emergencytelephon = _this.itemArray[0]['Emergencytelephon'];
                    _this.data.addres = _this.itemArray[0]['addres'];
                    _this.data.text = _this.itemArray[0]['text'];
                    _this.data.email = _this.itemArray[0]['email'];
                    console.log(_this.itemArray[0]['text']);
                }
            });
        });
    }
    DetailsComponent.prototype.ngOnInit = function () {
        console.log(this.id['id']);
        console.log(this.data);
    };
    DetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! ./details.component.html */ "./src/app/details/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.css */ "./src/app/details/details.component.css")]
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], DetailsComponent);
    return DetailsComponent;
}());

var itemListclass = /** @class */ (function () {
    function itemListclass() {
    }
    return itemListclass;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1{\r\n    color: black;\r\n  \r\n}\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-height-large uk-background-cover uk-light uk-flex\" uk-parallax=\"bgy: -200\" style=\"background-image: url('assets/111.jpg');\">\n  \n      <h1 class=\"uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical\"><h1>Kindergarten</h1></h1>\n\n  </div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./src/node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button{\r\n    color: white;\r\n    width: 80px;\r\n    height:  30px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-padding\">\n  \n      \n<table class=\"uk-table uk-table-striped \">\n  <thead>\n      <tr>\n          \n          \n         <th  style=\"text-align: -webkit-center;\" >$key</th>\n         <th  style=\"text-align: -webkit-center;\">name</th>\n         <th  style=\"text-align: -webkit-center;\">stage</th>\n         <th  style=\"text-align: -webkit-center;\">phone</th>\n         <th style=\"text-align: -webkit-center;\">fatherphone</th>\n         <th  style=\"text-align: -webkit-center;\">Emergencytelephon</th>\n         <th  style=\"text-align: -webkit-center;\">addres</th>\n        \n      </tr>\n  </thead>\n  <tbody >\n      <tr *ngFor=\"let item of itemArray\" style=\"text-align: -webkit-center;\">\n          <!-- <div *ngIf=\"item.uid ===myUid\"> -->\n            <td>{{item.$key}}</td>\n            <td>{{item.name}}</td>\n            <td>{{item.stage}}</td>\n            <td>{{item.phone}}</td>\n            <td>{{item.fatherphone}}</td>\n            <td>{{item.Emergencytelephon}}</td>\n            <td>{{item.addres}} </td>\n            <td> <button class=\"uk-button uk-button-primary uk-margin-small-right\" type=\"button\" (click)=\"moreInfo(item.$key)\">Details</button></td>\n                <td> <button class=\"uk-button uk-button-danger uk-button-small\"(click)=\"onDelete(item.$key)\">Delete</button></td>\n\n\n            <!-- This is the modal -->\n<div id=\"modal-example\" uk-modal>\n    <div class=\"uk-modal-dialog uk-modal-body\">\n        <fieldset class=\"uk-fieldset\">\n\n            <div class=\"uk-margin\">\n                <input class=\"uk-input\" type=\"text\" placeholder=\"الاسم\" name=\"name\" [(ngModel)]=\"data.name\">   \n            </div>\n            \n            <div class=\"uk-margin\">\n                <input class=\"uk-input\" type=\"text\" placeholder=\"المرحلة  \" name=\"stage\" [(ngModel)]=\"data.stage\">\n            </div>\n\n            <div class=\"uk-margin\">\n                <input class=\"uk-input\" type=\"text\" placeholder=\"رقم الهاتف\" name=\"phone\n                \" [(ngModel)]=\"data.phone\">\n            </div>\n\n            <div class=\"uk-margin\">\n                <input class=\"uk-input\" type=\"text\" placeholder=\"رقم هاتف ولي الامر \" name=\"fatherphone\n                \"[(ngModel)]=\"data.fatherphone\">\n            </div>\n            <div class=\"uk-margin\">\n                <input class=\"uk-input\" type=\"text\" placeholder=\"رقم الطواريء\" name=\"Emergencytelephon\" [(ngModel)]=\"data.Emergencytelephon\">\n            </div>\n\n            <div class=\"uk-margin\">\n                <input class=\"uk-input\" type=\"text\" placeholder=\"العنوان \" name=\"addres\" [(ngModel)]=\"data.addres\">\n            </div>\n\n\n\n            <div class=\"uk-margin\">\n                <textarea class=\"uk-textarea\" rows=\"5\" placeholder=\"ملاحظات\" name=\"text\"[(ngModel)]=\"data.text\"></textarea>\n            </div>\n\n        </fieldset>\n\n        <p class=\"uk-text-right\">\n            <button class=\"uk-button uk-button-danger uk-modal-close\" type=\"button\">Cancel</button>\n            <button class=\"uk-button uk-button-primary\" type=\"button\"\n            (click)=\"onEdit(item.$key)\">Save</button>\n           \n        </p>\n    </div>\n</div>\n<!-- </div> -->\n    </tr>\n     </tbody>\n      </table>\n\n</div>\n<!-- <button class=\"uk-button uk-button-primary uk-modal-close\" type=\"button\">اضافة</button> -->"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent, itemListclass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "itemListclass", function() { return itemListclass; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./src/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./src/node_modules/angularfire2/database/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./src/node_modules/@angular/router/fesm5/router.js");
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
    function LoginComponent(db, router) {
        var _this = this;
        this.db = db;
        this.router = router;
        this.itemArray = [];
        this.data = {
            name: '',
            stage: '',
            phone: '',
            fatherphone: '',
            Emergencytelephon: '',
            addres: '',
            text: '',
            email: '',
            uid: ''
        };
        this.itemList = db.list('Skills');
        this.itemList.snapshotChanges()
            .subscribe(function (action) {
            action.forEach(function (action) {
                var y = action.payload.toJSON();
                y['$key'] = action.key;
                _this.itemArray.push(y);
            });
        });
        this.myUid = localStorage.getItem('uid');
        console.log(this.itemArray);
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.moreInfo = function (key) {
        this.router.navigate(['details/' + key]);
    };
    LoginComponent.prototype.editForm = function ($key) {
        for (var _i = 0, _a = this.itemArray; _i < _a.length; _i++) {
            var value = _a[_i];
            if (value['$key'] == $key) {
                console.log(value['$key']);
                this.data.name = value['name'];
                this.data.stage = value['stage'];
                this.data.phone = value['phone'];
                this.data.fatherphone = value['fatherphone'];
                this.data.Emergencytelephon = value['Emergencytelephon'];
                this.data.addres = value['addres'];
                this.data.text = value['text'];
            }
        }
    };
    LoginComponent.prototype.onEdit = function ($key) {
        this.data.name;
        this.data.stage;
        this.data.phone;
        this.data.fatherphone;
        this.data.Emergencytelephon;
        this.data.addres;
        this.data.text;
        this.data.email;
        this.data.uid;
        this.itemList.set($key, {
            name: this.data.name,
            stage: this.data.stage,
            phone: this.data.phone,
            fatherphone: this.data.fatherphone,
            Emergencytelephon: this.data.Emergencytelephon,
            addres: this.data.addres,
            text: this.data.text
        });
        this.itemArray = [];
    };
    // console.log("key:"  +$key + "  name:" + this.data. name +" stage:" + this.data. stage +" phone:" +  this.data.phone +" fatherphone:" + this.data. fatherphone+"  Emergencytelephon:"+ this.data.Emergencytelephon+"  addres:"+ this.data.addres)
    // }
    LoginComponent.prototype.onDelete = function ($key) {
        this.itemList.remove($key);
        this.itemArray = [];
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());

var itemListclass = /** @class */ (function () {
    function itemListclass() {
    }
    return itemListclass;
}());



/***/ }),

/***/ "./src/app/my-kindergarten/my-kindergarten.component.css":
/*!***************************************************************!*\
  !*** ./src/app/my-kindergarten/my-kindergarten.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n    width: auto;\r\n    height: auto;\r\n}\r\nbils {\r\n    width: 60%;\r\n    height: 60%;\r\n}\r\nmm{\r\n    width: auto;\r\n    height: auto;  \r\n}\r\n"

/***/ }),

/***/ "./src/app/my-kindergarten/my-kindergarten.component.html":
/*!****************************************************************!*\
  !*** ./src/app/my-kindergarten/my-kindergarten.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-child-width-1-2@m uk-padding uk-height=12px\" uk-grid>\n  <div>\n      <div class=\"uk-card uk-card-default\">\n          <div class=\"uk-card-media-top\">\n              <img src=\"assets/1414.jpg\"   alt=\"\">\n          </div>\n          <div class=\"uk-card-body\">\n            <h1 class=\"uk-card-title\"><h2>اولا/</h2> <a href=\"#\">حماية الاطفال</a></h1>\n              \n             \n              <p>حماية الطفل هي مجموعة من الإجراءات والأطر التي تمنع حدوث الإساءة للطفل، واستغلاله، وإهماله، بالإضافة إلى العنف الذي يؤثر على نفسية الطفل، وذلك حسب ما ورد ذلك في اتفاقية الأمم المتحدة لحقوق الطفل، وجميع اتفاقيات حقوق الإنسان، والقوانين الوطنية النافذة.    </p>\n          </div>\n      </div>\n  </div>\n\n        <div class=\"uk-card uk-card-default\">\n            <div class=\"uk-card-media-top\">\n                <img class=\"bils\" src=\"assets/0202.jpg\"   alt=\"\">\n            </div>\n            <div class=\"uk-card-body\">\n                <h1 class=\"uk-card-title\"><h2>ثانيا/</h2> <a href=\"#\">غرف النشاط</a></h1>\n                \n               \n                 <p>• غرف النشاط\n                    ان يوجد نظام ثابت ومحدد او أمثل لتنظيم غرفة النشاط من خلال الاركان ولكن هناك احتمالات متعددة وكلها تعتبر مقبولة اذا ما روعيت عدد من\n                    النقاط الاساسية عندالتخطيط لهذة الاركان وهى:\n                    - ان تتيح رؤية كل الانشطة من اى زاوية من الغرفة.\n                    - ان تتيح مناطق توفر للاطفال العمل او الاسترخاء دون ازعاج.\n                    - ان تشجع اقامة العلاقات بفاعلية.\n                    - ان تشبع احتياجات المعلمة النامية والمتنوعة.\n                    - ان تشبع اهتمامات اطفال الروضة.\n                    - ان توفر شروط الامان للافراد ووضع الخامات والادوات على الارففاو على الحائط ويجب ان تكون على ارتفاع الاطفال وتكون فى مستوى رؤيتهم.</p>\n            </div>\n        \n    </div>\n    <div class=\"uk-card uk-card-default\">\n        <div class=\"uk-card-media-top\">\n            <img class=\"bils\" src=\"assets/2525.jpg\"   alt=\"\">\n        </div>\n        <div class=\"uk-card-body\">\n            <h1 class=\"uk-card-title\"><h2>ثالثا/</h2> <a href=\"#\">*الاركان الاساسية فى قاعة النشاط: يمكن حصرها فى: </a></h1>\n            \n           \n             <p>- فنون اللغة (القراءة والكتابة)\n                    - الرياضيات وتشمل (الرمل-الماء-المكعبات-الطمى........ )\n                    - اعمال الفن والابتكار وتشمل\n                    (عمال الخشب-العجين-التلوين-الخامات المستهلكة-الخياطة-الموسيقى-عمل نماذج وصور من كل الانواع)\n                    - الانشطة التخيلية وتشمل\n                    (العاب التنكر-اللعب الدرامى-نماذج حيوانات المزرعة وحديقة الحيوان-منزل الدمية)\n                    - منطقة للعرض(حيث يمكن عرض الادوات والخامات واعمال الطفل)\n                    - منطقة البناء والهدم وتشمل\n                    (اللعب بالمكعبات، وهو مكان يتيح للاطفال ان يبدأو بالبناء بالمكعبات ويتركها فى امان حيث يمكن العودة لاستكمالها)\n                    - العروض المرئية والسمعية (افلام- شرائح- cd - dvd- تليفزيون- راديو....الخ)\n                    - منطقة للتجمع (وهو مكان يجلس فية الاطفال مجتمعين للاستماع الى قصة مثلا).\n                    - منطقة للادوات الموسيقية البسيطة.</p>\n        </div>\n    \n"

/***/ }),

/***/ "./src/app/my-kindergarten/my-kindergarten.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/my-kindergarten/my-kindergarten.component.ts ***!
  \**************************************************************/
/*! exports provided: MyKindergartenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyKindergartenComponent", function() { return MyKindergartenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./src/node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyKindergartenComponent = /** @class */ (function () {
    function MyKindergartenComponent() {
    }
    MyKindergartenComponent.prototype.ngOnInit = function () {
    };
    MyKindergartenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-kindergarten',
            template: __webpack_require__(/*! ./my-kindergarten.component.html */ "./src/app/my-kindergarten/my-kindergarten.component.html"),
            styles: [__webpack_require__(/*! ./my-kindergarten.component.css */ "./src/app/my-kindergarten/my-kindergarten.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MyKindergartenComponent);
    return MyKindergartenComponent;
}());



/***/ }),

/***/ "./src/app/myfonte/myfonte.component.css":
/*!***********************************************!*\
  !*** ./src/app/myfonte/myfonte.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n#contactUs{\r\n    height: 640px;\r\n    background-color:#82ccdd;\r\n    text-align: center;\r\n   \r\n}\r\n#contactUs{\r\n\r\nbackground-image: url(/assets/0202.jpg) \r\n\r\n\r\n\r\n}\r\n#contactUs{\r\n    opacity: 16.3;\r\n}\r\n#contactUsMain{\r\n    width: 960px;\r\n    margin: 0px auto;\r\n}\r\n#contactDetails{\r\n    text-align: center;\r\n    width: 480px;\r\n    float: left;\r\n}\r\n#contactUs h2{\r\n    color: white;\r\n \r\n}\r\n#contactDetails h3{\r\n    color: white;\r\n}\r\n.contactImg{\r\n    height: 75px;\r\n    margin-top: 35px;\r\n    margin-bottom: 10px;\r\n}\r\n#contactLocation{\r\n    width: 480px;\r\n    float: right;\r\n}\r\n#siteFooter {\r\n    height: 60px;\r\n    background-color:#4a69bd;\r\n    color:white;\r\n    text-align: center;\r\n   \r\n}\r\n#siteFooter h3{\r\n    text-align: center;\r\n    color:white;}\r\n#contactUs h1{\r\n        color:black;\r\n        margin-top: 5px;\r\n    }\r\n#contactUs h3{\r\n        color:#141414;}\r\n#contactUs h6{\r\n        margin-top: -8px;\r\n        color:rgb(12, 12, 12);\r\n    }\r\n#contactUs h2{\r\n        color: #ff3838;\r\n\r\n    }"

/***/ }),

/***/ "./src/app/myfonte/myfonte.component.html":
/*!************************************************!*\
  !*** ./src/app/myfonte/myfonte.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"contactUs\">\r\n\r\n    <h2><b>تواصل معنا</b></h2>\r\n    <div id=\"contactUsMain\">\r\n        <div id=\"contactDetails\">\r\n            <a a href=\"#\"><img class=\"contactImg\" src=\"/assets/52757.png\"></a>\r\n            <h1>info@gmail.com</h1>\r\n            <a a href=\"#\"> <img class=\"contactImg\" src=\"/assets/phone.png\"></a>\r\n            <h3><b>07700245124 -07542142875</b></h3>\r\n            <a a href=\"#\"><img class=\"contactImg\" src=\"/assets\\7.ico \" ></a>\r\n            <h6><b>www.protectionKindergarten.com</b></h6>\r\n            <h3><a href=\"#\" style=\"text-decoration: none; color:powderblue \"  >حمايه الاطفال</a></h3>\r\n          \r\n        </div>\r\n        <div id=\"contactLocation\">\r\n            <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92177.55597674989!2d44.356904966002254!3d33.28722906064924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc1f986643f58a7af!2z2LHZiNi22Kk!5e1!3m2!1sar!2siq!4v1527554018072\" width=\"540\" height=\"540\" frameborder=\"0\" style=\"margin: 20px\" allowfullscreen></iframe>\r\n        </div>\r\n    </div>\r\n</section>\r\n<footer id=\"siteFooter\" >\r\n    \r\n\r\n    <h3> جميع الحقوق محفوظة لدى روضه حماية الاطفال @2018 </h3>\r\n    </footer>\r\n"

/***/ }),

/***/ "./src/app/myfonte/myfonte.component.ts":
/*!**********************************************!*\
  !*** ./src/app/myfonte/myfonte.component.ts ***!
  \**********************************************/
/*! exports provided: MyfonteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyfonteComponent", function() { return MyfonteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./src/node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyfonteComponent = /** @class */ (function () {
    function MyfonteComponent() {
    }
    MyfonteComponent.prototype.ngOnInit = function () {
    };
    MyfonteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-myfonte',
            template: __webpack_require__(/*! ./myfonte.component.html */ "./src/app/myfonte/myfonte.component.html"),
            styles: [__webpack_require__(/*! ./myfonte.component.css */ "./src/app/myfonte/myfonte.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MyfonteComponent);
    return MyfonteComponent;
}());



/***/ }),

/***/ "./src/app/mylogin/mylogin.component.css":
/*!***********************************************!*\
  !*** ./src/app/mylogin/mylogin.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.uk-card {\r\nbackground-image: url(/assets/78787.jpg)\r\n}\r\n.uk-padding h3{\r\n color:white;\r\n background-color:#00d8d6;\r\n}"

/***/ }),

/***/ "./src/app/mylogin/mylogin.component.html":
/*!************************************************!*\
  !*** ./src/app/mylogin/mylogin.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-padding\">\n\n  <div class=\"uk-card uk-card-default uk-card-body  \">\n      <h3 class=\"uk-card-title\">  الدخول</h3>\n    \n \n\n\n<fieldset class=\"uk-fieldset\">\n\n\n    <div class=\"uk-margin\">\n        <input class=\"uk-input\" type=\"text\" placeholder=\"البريد الالكتروني\" name=\"email\" [(ngModel)]=\"email\">\n    </div>\n    <div class=\"uk-margin\">\n        <input class=\"uk-input\" type=\"text\" placeholder=\"كلمة السر\" name=\"password\" [(ngModel)]=\"password\">\n    </div>\n\n\n\n\n    <div class=\"uk-margin\">\n        <button class=\"uk-button uk-button-primary\" (click)=\"myLogin()\">الدخول</button>\n    </div>\n\n</fieldset>\n\n\n\n</div>\n\n</div>"

/***/ }),

/***/ "./src/app/mylogin/mylogin.component.ts":
/*!**********************************************!*\
  !*** ./src/app/mylogin/mylogin.component.ts ***!
  \**********************************************/
/*! exports provided: MyloginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyloginComponent", function() { return MyloginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./src/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./src/node_modules/angularfire2/auth/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./src/node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyloginComponent = /** @class */ (function () {
    function MyloginComponent(fire, router) {
        this.fire = fire;
        this.router = router;
        this.email = '';
        this.password = '';
    }
    MyloginComponent.prototype.ngOnInit = function () {
    };
    MyloginComponent.prototype.myLogin = function () {
        var _this = this;
        this.fire.auth.signInWithEmailAndPassword(this.email, this.password)
            .then(function (user) {
            console.log(_this.email, _this.password);
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('email', _this.fire.auth.currentUser.email);
            _this.fire.authState.subscribe(function (auth) {
                if (auth) {
                    localStorage.setItem('uid', auth.uid);
                    localStorage.setItem('uid', auth.uid);
                }
            });
            _this.router.navigate(['home']);
        }).catch(function (error) {
            console.error(error);
        });
    };
    MyloginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mylogin',
            template: __webpack_require__(/*! ./mylogin.component.html */ "./src/app/mylogin/mylogin.component.html"),
            styles: [__webpack_require__(/*! ./mylogin.component.css */ "./src/app/mylogin/mylogin.component.css")]
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MyloginComponent);
    return MyloginComponent;
}());



/***/ }),

/***/ "./src/app/myregister/myregister.component.css":
/*!*****************************************************!*\
  !*** ./src/app/myregister/myregister.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".uk-padding{\r\nbackground-image: url(\"/assets/122.jpg\" )\r\n\r\n\r\n}\r\n.uk-padding h3{\r\n    color:#fefeff;\r\n}\r\n.uk-card{\r\n    background-color:#575fcf;\r\n}"

/***/ }),

/***/ "./src/app/myregister/myregister.component.html":
/*!******************************************************!*\
  !*** ./src/app/myregister/myregister.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-padding\">\n\n  <div class=\"uk-card uk-card-default uk-card-body  \">\n      <h3 class=\"uk-card-title\">  التسجيل</h3>\n    \n \n\n\n<fieldset class=\"uk-fieldset\">\n\n\n    <div class=\"uk-margin\">\n        <input class=\"uk-input\" type=\"text\" placeholder=\"البريد الالكتروني\" name=\"email\" [(ngModel)]=\"email\">\n    </div>\n    <div class=\"uk-margin\">\n        <input class=\"uk-input\" type=\"text\" placeholder=\"كلمة السر\" name=\"password\" [(ngModel)]=\"password\">\n    </div>\n\n\n\n\n    <div class=\"uk-margin\">\n        <button class=\"uk-button uk-button-primary\" (click)=\"myRegister()\">تسجيل</button>\n    </div>\n\n</fieldset>\n\n\n\n</div>\n\n</div>"

/***/ }),

/***/ "./src/app/myregister/myregister.component.ts":
/*!****************************************************!*\
  !*** ./src/app/myregister/myregister.component.ts ***!
  \****************************************************/
/*! exports provided: MyregisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyregisterComponent", function() { return MyregisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./src/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./src/node_modules/angularfire2/auth/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./src/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/database */ "./src/node_modules/angularfire2/database/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyregisterComponent = /** @class */ (function () {
    function MyregisterComponent(db, fire, router) {
        this.db = db;
        this.fire = fire;
        this.router = router;
        this.email = '';
        this.password = '';
        this.itemList = db.list('users');
    }
    MyregisterComponent.prototype.ngOnInit = function () {
    };
    MyregisterComponent.prototype.myRegister = function () {
        var _this = this;
        this.fire.auth.createUserWithEmailAndPassword(this.email, this.password)
            .then(function (user) {
            console.log(_this.email, _this.password);
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('email', _this.fire.auth.currentUser.email);
            _this.fire.authState.subscribe(function (auth) {
                if (auth) {
                    localStorage.setItem('uid', auth.uid);
                    _this.itemList.push({
                        email: _this.email,
                        uid: auth.uid,
                        name: '',
                        stage: '',
                        phone: '',
                        addres: '',
                        fatherphone: '',
                        Emergencytelephon: '',
                        image: 'assets/img/person.png'
                    });
                }
            });
            _this.router.navigate(['home']);
        }).catch(function (error) {
            console.error(error);
        });
    };
    MyregisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-myregister',
            template: __webpack_require__(/*! ./myregister.component.html */ "./src/app/myregister/myregister.component.html"),
            styles: [__webpack_require__(/*! ./myregister.component.css */ "./src/app/myregister/myregister.component.css")]
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"], angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MyregisterComponent);
    return MyregisterComponent;
}());



/***/ }),

/***/ "./src/app/myskill/myskill.component.css":
/*!***********************************************!*\
  !*** ./src/app/myskill/myskill.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/myskill/myskill.component.html":
/*!************************************************!*\
  !*** ./src/app/myskill/myskill.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-child-width-1-2@m uk-padding \" uk-grid>\n  <div>\n      <div class=\"uk-card uk-card-default\">\n          <div class=\"uk-card-media-top\">\n              <img src=\"assets/122.jpg\" alt=\"\">\n            \n          </div>\n          <div class=\"uk-card-body\">\n              <h3 class=\"uk-card-title\">الابتكار والتنمية </h3>\n              <p>اساسي وحيوي في تنمية مهارات  الابتكار والتنمية لدى الاطفال في روضة الاطفال وذلك عن طريق اتقان مهارات الاتصال والتواصل مع الطفل  الروضة ووجود دوافع العمل الابتكاري لديها واكتشافها قدرات الاطفال الابتكارية والعمل على التنمية فالتفاعل بينت المعلمه والاطفال من خلال اتصال والتواصل يسمح للمعلمة بالتواصل والقيام بادوار فعاله بالاضافة الى نشاطات الاطفال ان اساليب ووسائل التنمية والابداع تشكل في مجموعها نظاما متكاملا او برامج شامله بالاضافة الى تنمية المهارات العقليه والمعلومات التي تتصل بمجالات الابداع المختلفه والسمات المرتبطه بها لدى الطفل والمعلمة او المعلم. </p>\n          </div>\n      </div>\n  </div>\n  "

/***/ }),

/***/ "./src/app/myskill/myskill.component.ts":
/*!**********************************************!*\
  !*** ./src/app/myskill/myskill.component.ts ***!
  \**********************************************/
/*! exports provided: MyskillComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyskillComponent", function() { return MyskillComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./src/node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyskillComponent = /** @class */ (function () {
    function MyskillComponent() {
    }
    MyskillComponent.prototype.ngOnInit = function () {
    };
    MyskillComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-myskill',
            template: __webpack_require__(/*! ./myskill.component.html */ "./src/app/myskill/myskill.component.html"),
            styles: [__webpack_require__(/*! ./myskill.component.css */ "./src/app/myskill/myskill.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MyskillComponent);
    return MyskillComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " h5{\r\n    color: #b26afaee;\r\n    \r\n}\r\n.uk-navbar-right {\r\n    background-color:#222f3e;\r\n    width: 1500px;\r\n    height: 80px;\r\n}\r\n.uk-navbar-right .uk-navbar-nav a{\r\n    color:white;\r\n}\r\n.uk-navbar-right .uk-navbar-dropdown a {\r\n    color:#f368e0;\r\n    border: 0px solid;\r\n\r\n}\r\n.uk-navbar-left {\r\nbackground-color:#222f3e;\r\n\r\n}\r\n.uk-navbar-left  a{\r\n\r\ncolor:#ff4757;\r\n}"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"uk-navbar-container \" uk-navbar>\n        <div class=\"uk-navbar-right\">\n    \n            <ul class=\"uk-navbar-nav\">\n                <li class=\"uk-active\"><a routerLink=\"/\">الروضة</a></li>\n                \n                <li>   <a href=\"#\">التسجيل</a>\n                    <div class=\"uk-navbar-dropdown\">\n                        <ul class=\"uk-nav uk-navbar-dropdown-nav\">\n                    <li> <a href=\"/addskill\">اضافة</a></li>\n                  \n                            <li><a href=\"/register\"><h5>عرض</h5></a></li>\n                            \n                        </ul>\n                    </div>\n\n                    <li *ngIf=\"!isLoggedIn\" >   <a href=\"/myregister\">تسجيل حساب جديد </a></li>\n                        <li *ngIf=\"!isLoggedIn\" >   <a href=\"/mylogin\">دخول  </a></li>\n                        \n                       \n    \n                    <li>   <a href=\"#\"></a>\n                        <div class=\"uk-navbar-dropdown\">\n                            <ul class=\"uk-nav uk-navbar-dropdown-nav\">\n                        <li> <a href=\"/addskill\">اضافة</a></li>\n                      \n                               \n                                \n                            </ul>\n                        </div>\n\n                </li>\n                <li><a href=\"#\">اداره الروضه </a></li>\n                <li><a routerLink=\"/myKindergarten\"> حماية الروضات</a></li>\n               <li> <a href=\"#\"> المناهج والترفهة</a>\n\n        <div class=\"uk-navbar-dropdown\">\n                        <ul class=\"uk-nav uk-navbar-dropdown-nav\">\n                    <li> <a href=\"#\">المهارات </a></li>\n                  \n                            <li><a href=\"#\"><h5>تعلم البرمجة</h5></a></li>\n                            <li><a href=\"#\"><h5>الرياضة</h5></a></li>\n                            <li><a href=\"#\"><h5> تعلم اللغة الانكليزية </h5></a></li>\n                            <li><a href=\"#\"><h5>تعلم اللغة الفرنسية </h5></a></li>\n                            \n                            \n                        </ul>\n        </div>\n                <li><a routerLink=\"/myskill\">  الابتكار والتنمية</a></li>\n                <li><a routerLink=\"/myfonte\">اتصل بنا</a></li>\n              \n            \n            </ul>\n            </div>\n               <div class=\"uk-navbar-left\">\n               \n                <ul class=\"uk-navbar-nav\">\n    <li>\n                <div class=\"uk-navbar-dropdon\">\n                <ul class=\"uk-nav uk-nabar-dropdown-nav\">\n                <!-- <li><a href=\"#\">اضف </a></li>\n                 <li><a href=\"#\">خروج </a></li>  -->\n            </ul>\n            </div>\n               </li>\n                \n            </ul>\n    \n        </div>\n      \n              \n        <div class=\"uk-navbar-left\">\n\n            <ul class=\"uk-navbar-nav\">\n           \n              \n        \n                <li *ngIf=\"isLoggedIn\">\n                  <a href=\"#\">حسابك الشخصي</a>\n                  <div class=\"uk-navbar-dropdown\">\n                      <ul class=\"uk-nav uk-navbar-dropdown-nav\">\n                          <li><a routerLink=\"/userprofile\">معلوماتك</a> </li>\n                          <li><a href=\"#\" (click)=\"logout()\"> خروج</a></li>\n                      </ul>\n                  </div>\n              </li>\n        \n        \n            </ul>\n        \n        </div>\n        \n     \n    </nav> \n    "

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./src/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./src/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./src/node_modules/angularfire2/auth/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(afAuth, router) {
        this.afAuth = afAuth;
        this.router = router;
        this.isLoggedIn = false;
        var status = localStorage.getItem('isLoggedIn');
        console.log(status);
        if (status === 'true') {
            this.isLoggedIn = true;
        }
        else {
            this.isLoggedIn = false;
        }
        // firebase.auth().onAuthStateChanged(function(user) {
        //   if (user) {
        //     // User is signed in.
        //     this.isLoggedIn = true;
        //   } else {
        //     // No user is signed in.
        //     this.isLoggedIn = false;
        //   }
        // });
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.logout = function () {
        this.afAuth.auth.signOut();
        this.isLoggedIn = false;
        localStorage.setItem('isLoggedIn', 'false');
        localStorage.setItem('email', '');
        localStorage.setItem('uid', '');
        this.router.navigate(['/login']);
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/ngmodel/ngmodel.component.css":
/*!***********************************************!*\
  !*** ./src/app/ngmodel/ngmodel.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ngmodel/ngmodel.component.html":
/*!************************************************!*\
  !*** ./src/app/ngmodel/ngmodel.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  ngmodel works!\n</p>\n"

/***/ }),

/***/ "./src/app/ngmodel/ngmodel.component.ts":
/*!**********************************************!*\
  !*** ./src/app/ngmodel/ngmodel.component.ts ***!
  \**********************************************/
/*! exports provided: NgmodelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgmodelComponent", function() { return NgmodelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./src/node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NgmodelComponent = /** @class */ (function () {
    function NgmodelComponent() {
    }
    NgmodelComponent.prototype.ngOnInit = function () {
    };
    NgmodelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ngmodel',
            template: __webpack_require__(/*! ./ngmodel.component.html */ "./src/app/ngmodel/ngmodel.component.html"),
            styles: [__webpack_require__(/*! ./ngmodel.component.css */ "./src/app/ngmodel/ngmodel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NgmodelComponent);
    return NgmodelComponent;
}());



/***/ }),

/***/ "./src/app/ngmodule/ngmodule.component.css":
/*!*************************************************!*\
  !*** ./src/app/ngmodule/ngmodule.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ngmodule/ngmodule.component.html":
/*!**************************************************!*\
  !*** ./src/app/ngmodule/ngmodule.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  ngmodule works!\n</p>\n"

/***/ }),

/***/ "./src/app/ngmodule/ngmodule.component.ts":
/*!************************************************!*\
  !*** ./src/app/ngmodule/ngmodule.component.ts ***!
  \************************************************/
/*! exports provided: NgmoduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgmoduleComponent", function() { return NgmoduleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./src/node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NgmoduleComponent = /** @class */ (function () {
    function NgmoduleComponent() {
    }
    NgmoduleComponent.prototype.ngOnInit = function () {
    };
    NgmoduleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ngmodule',
            template: __webpack_require__(/*! ./ngmodule.component.html */ "./src/app/ngmodule/ngmodule.component.html"),
            styles: [__webpack_require__(/*! ./ngmodule.component.css */ "./src/app/ngmodule/ngmodule.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NgmoduleComponent);
    return NgmoduleComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".uk-padding{\r\nbackground-image: url(/assets/2017.jpg)\r\n}"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"uk-padding\">\n    <fieldset class=\"uk-fieldset\">\n        <div class=\"uk-card uk-card-default uk-card-body uk-width-1-2@m\">\n  \n  \n        \n          \n  \n        <legend class=\"uk-legend\">عرض</legend>\n  \n        <div class=\"uk-margin\">\n            <input class=\"uk-input\" type=\"text\" placeholder=\"الاسم \"  name=\"name\" [(ngModel)]=\"data.name\">\n        </div>\n        <div class=\"uk-margin\">\n            <input class=\"uk-input\" type=\"text\" placeholder=\"المرحلة \"  name=\"stage\" [(ngModel)]=\"data.stage\">\n        </div>\n        <div class=\"uk-margin\">\n            <input class=\"uk-input\" type=\"text\" placeholder=\"الرقم السري \"  name=\"pasword\" [(ngModel)]=\"data.password\">\n        </div>\n        <div class=\"uk-margin\">\n            <button class=\"uk-button uk-button-primary\" (click)=\"insertSkill()\"><h4>حفظ واضافة</h4></button>\n       \n        </div>\n  </div>\n  </fieldset>\n  </div>\n  "

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./src/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./src/node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./src/node_modules/angularfire2/auth/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./src/node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(fire, db, router) {
        this.fire = fire;
        this.db = db;
        this.router = router;
        this.data = {
            name: '',
            stage: '',
            password: '',
        };
        this.itemList = db.list('Skills');
        this.data.name = localStorage.getItem('name');
        this.data.stage = localStorage.getItem('stage');
        this.data.password = localStorage.getItem('paasword');
        this.data.name = localStorage.getItem('name');
        console.log('name: ' + this.data.name);
    }
    RegisterComponent.prototype.ngOnInit = function () {
        console.log(this.data.name);
        console.log(this.data.stage);
        console.log(this.data.password);
    };
    RegisterComponent.prototype.insertSkill = function () {
        this.itemList.push({
            name: this.data.name,
            stage: this.data.stage,
            password: this.data.password,
        });
        this.router.navigate(['/home']);
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/skill/skill.component.css":
/*!*******************************************!*\
  !*** ./src/app/skill/skill.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/skill/skill.component.html":
/*!********************************************!*\
  !*** ./src/app/skill/skill.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"uk-navbar-nav\">\n  <li class=\"uk-active\"><a routerLink=\"/\">الروضة</a></li>\n  \n  <li>   <a href=\"#\">التسجيل</a>\n      <div class=\"uk-navbar-dropdown\">\n          <ul class=\"uk-nav uk-navbar-dropdown-nav\">\n      <li> <a routerLink=\"/skill\">اضافة</a></li>\n    \n              <li><a href=\"/register\"><h5>عرض</h5></a></li>\n              \n          </ul>\n      </div>"

/***/ }),

/***/ "./src/app/skill/skill.component.ts":
/*!******************************************!*\
  !*** ./src/app/skill/skill.component.ts ***!
  \******************************************/
/*! exports provided: SkillComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillComponent", function() { return SkillComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./src/node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SkillComponent = /** @class */ (function () {
    function SkillComponent() {
    }
    SkillComponent.prototype.ngOnInit = function () {
    };
    SkillComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-skill',
            template: __webpack_require__(/*! ./skill.component.html */ "./src/app/skill/skill.component.html"),
            styles: [__webpack_require__(/*! ./skill.component.css */ "./src/app/skill/skill.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SkillComponent);
    return SkillComponent;
}());



/***/ }),

/***/ "./src/app/userprofile/userprofile.component.css":
/*!*******************************************************!*\
  !*** ./src/app/userprofile/userprofile.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".uk-card-body{\r\n    background-color:#f5f6fa;\r\n}\r\n.uk-card-header{\r\n    background-color:aqua;\r\n\r\n}\r\n.uk-card-footer{\r\n    background-color: #40739e;\r\n}"

/***/ }),

/***/ "./src/app/userprofile/userprofile.component.html":
/*!********************************************************!*\
  !*** ./src/app/userprofile/userprofile.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-padding\">\n<div class=\"uk-card uk-card-default \">\n    <div class=\"uk-card-header\">\n        <div class=\"uk-grid-small uk-flex-middle\" uk-grid>\n            <div class=\"uk-width-auto\">\n                <img class=\"uk-border-circle\" width=\"200\" height=\"200\" src=\"{{data.image}}\">\n                <br>\n   \n<input class=\"uk-button uk-button-secondary uk-button-danger\" type=\"file\"  (change)=\"upload($event)\" accept=\".png,jpg\"/>\n              </div>\n            <div class=\"uk-width-expand\">\n                <h3 class=\"uk-card-title uk-margin-remove-bottom\">Email:{{email}}</h3>\n               \n            </div>\n        </div>\n    </div>\n    <div class=\"uk-card-body\">\n        <p> name: {{data.name}}</p>\n        <p>  stage: {{data.stage}}</p>\n        <p>   phone: {{data.phone}}</p>\n        <p> addres: {{data.addres}}</p>\n        <p> fatherphone: {{data.fatherphone}}</p>\n        <p> Emergencytelephon: {{data.Emergencytelephon}}</p>\n    </div>\n    <div class=\"uk-card-footer\">\n        <a href=\"#\" class=\"uk-button uk-button-text uk-button-danger\"  uk-toggle=\"target: #modal-example\">Edit</a>\n\n\n\n       \n\n\n    <!-- This is the modal -->\n<div id=\"modal-example\" uk-modal>\n<div class=\"uk-modal-dialog uk-modal-body\">\n<fieldset class=\"uk-fieldset\">\n\n    <div class=\"uk-margin\">\n        <input class=\"uk-input\" type=\"text\" placeholder=\"الاسم\" name=\"name\" [(ngModel)]=\"data.name\">   \n    </div>\n    \n    <div class=\"uk-margin\">\n        <input class=\"uk-input\" type=\"text\" placeholder=\"المرحلة  \" name=\"stage\" [(ngModel)]=\"data.stage\">\n    </div>\n\n    <div class=\"uk-margin\">\n        <input class=\"uk-input\" type=\"text\" placeholder=\"رقم الهاتف\" name=\"phone\n        \" [(ngModel)]=\"data.phone\">\n    </div>\n\n\n   \n\n    <div class=\"uk-margin\">\n        <input class=\"uk-input\" type=\"text\" placeholder=\"العنوان \" name=\"addres\" [(ngModel)]=\"data.addres\">\n    </div>\n\n    <div class=\"uk-margin\">\n        <input class=\"uk-input\" type=\"text\" placeholder=\"رقم الاب  \" name=\"fatherphone\n        \" [(ngModel)]=\"data.fatherphone\">\n    </div>\n\n    <div class=\"uk-margin\">\n        <input class=\"uk-input\" type=\"text\" placeholder=\" رقم الطورئ\" name=\"Emergencytelephon\n        \" [(ngModel)]=\"data.Emergencytelephon\">\n    </div>\n\n\n</fieldset>\n\n<p class=\"uk-text-right\">\n    <button class=\"uk-button uk-button-danger uk-modal-close\" type=\"button\">Cancel</button>\n    <button class=\"uk-button uk-button-primary uk-modal-close\" type=\"button\"\n    (click)=\"onEdit()\">Save</button>\n   \n</p>\n</div>\n</div>\n</div>\n\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/userprofile/userprofile.component.ts":
/*!******************************************************!*\
  !*** ./src/app/userprofile/userprofile.component.ts ***!
  \******************************************************/
/*! exports provided: UserprofileComponent, ListItemClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserprofileComponent", function() { return UserprofileComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItemClass", function() { return ListItemClass; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./src/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./src/node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/storage */ "./src/node_modules/angularfire2/storage/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./src/node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserprofileComponent = /** @class */ (function () {
    function UserprofileComponent(afStorage, db, route) {
        var _this = this;
        this.afStorage = afStorage;
        this.db = db;
        this.route = route;
        this.itemArray = [];
        this.data = {
            name: '',
            stage: '',
            phone: '',
            addres: '',
            fatherphone: '',
            Emergencytelephon: '',
            email: '',
            uid: '',
            image: ''
        };
        this.spinner = true;
        this.redirect = false;
        this.email = localStorage.getItem('email');
        this.myid = localStorage.getItem('uid');
        if (this.redirect == false) {
            '';
        }
        this.itemList = db.list('users');
        this.itemList.snapshotChanges()
            .subscribe(function (actions) {
            actions.forEach(function (action) {
                var y = action.payload.toJSON();
                y["$key"] = action.key;
                _this.userKey;
                //   console.log(action.payload.toJSON())
                //   console.log(action.payload.child('uid').val() )
                if (action.payload.child('uid').val() == _this.myid) {
                    _this.userKey = action.key;
                    _this.itemArray.push(y);
                    _this.data.name = _this.itemArray[0]['name'];
                    _this.data.stage = _this.itemArray[0]['stage'];
                    _this.data.phone = _this.itemArray[0]['phone'];
                    _this.data.addres = _this.itemArray[0]['addres'];
                    _this.data.fatherphone = _this.itemArray[0]['fatherphone'];
                    _this.data.Emergencytelephon = _this.itemArray[0]['Emergencytelephon'];
                    _this.data.email = _this.itemArray[0]['email'];
                    _this.data.image = _this.itemArray[0]['image'];
                    _this.data.uid = _this.itemArray[0]['uid'];
                    _this.spinner = false;
                    console.log(_this.data);
                }
            });
        });
    }
    UserprofileComponent.prototype.ngOnInit = function () {
        console.log(this.email);
        console.log(this.myid);
    };
    UserprofileComponent.prototype.upload = function (event) {
        var _this = this;
        var id = Math.random().toString(36).substring(2);
        this.afStorage.upload(id, event.target.files[0]).then(function () {
            _this.ref = _this.afStorage.ref(id);
            _this.ref.getDownloadURL().subscribe(function (url) {
                console.log(url);
                if (url) {
                    _this.imageURL = url;
                    _this.itemList.set(_this.userKey, {
                        name: _this.data.name,
                        stage: _this.data.stage,
                        phone: _this.data.phone,
                        addres: _this.data.addres,
                        fatherphone: _this.data.fatherphone,
                        Emergencytelephon: _this.data.Emergencytelephon,
                        email: _this.email,
                        uid: _this.myid,
                        image: _this.imageURL
                    });
                }
            });
        });
    };
    UserprofileComponent.prototype.onEdit = function () {
        this.itemList.set(this.userKey, {
            name: this.data.name,
            stage: this.data.stage,
            phone: this.data.phone,
            addres: this.data.addres,
            fatherphone: this.data.fatherphone,
            Emergencytelephon: this.data.Emergencytelephon,
            email: this.email,
            uid: this.myid,
            image: this.data.image
        });
    };
    UserprofileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-userprofile',
            template: __webpack_require__(/*! ./userprofile.component.html */ "./src/app/userprofile/userprofile.component.html"),
            styles: [__webpack_require__(/*! ./userprofile.component.css */ "./src/app/userprofile/userprofile.component.css")]
        }),
        __metadata("design:paramtypes", [angularfire2_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"], angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], UserprofileComponent);
    return UserprofileComponent;
}());

var ListItemClass = /** @class */ (function () {
    function ListItemClass() {
    }
    return ListItemClass;
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
    production: false,
    firebase: {
        apiKey: "AIzaSyCLCzHS00MaBsCpW4TMOKyP7ohm1YM2oQg",
        authDomain: "bilal1994-2f5c2.firebaseapp.com",
        databaseURL: "https://bilal1994-2f5c2.firebaseio.com",
        projectId: "bilal1994-2f5c2",
        storageBucket: "bilal1994-2f5c2.appspot.com",
        messagingSenderId: "919726681453"
    }
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./src/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./src/node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/node_modules/@angular/core/fesm5 lazy recursive":
/*!********************************************************************!*\
  !*** ./src/node_modules/@angular/core/fesm5 lazy namespace object ***!
  \********************************************************************/
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
webpackEmptyAsyncContext.id = "./src/node_modules/@angular/core/fesm5 lazy recursive";

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\bilal ALFHAD\Desktop\biala\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
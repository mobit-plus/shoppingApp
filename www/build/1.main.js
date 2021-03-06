webpackJsonp([1],{

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_page__ = __webpack_require__(306);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    return LoginPageModule;
}());
LoginPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__login_page__["a" /* LoginPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login_page__["a" /* LoginPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__login_page__["a" /* LoginPage */]
        ]
    })
], LoginPageModule);

//# sourceMappingURL=login-page.module.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailValidator; });
var EmailValidator = (function () {
    function EmailValidator() {
    }
    EmailValidator.isValid = function (control) {
        var re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(control.value);
        // success
        if (re) {
            return null;
        }
        return { "invalidEmail": true };
    };
    return EmailValidator;
}());

//# sourceMappingURL=email.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_firebase_service__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validators_email__ = __webpack_require__(304);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = (function () {
    function LoginPage(navCtrl, firebaseService, loadingCtrl, alertCtrl, formBuilder) {
        this.navCtrl = navCtrl;
        this.firebaseService = firebaseService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.loginForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__validators_email__["a" /* EmailValidator */].isValid])],
            password: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required])]
        });
    }
    LoginPage.prototype.loginUser = function () {
        var _this = this;
        if (this.loginForm.valid) {
            this.loading = this.loadingCtrl.create();
            this.loading.present();
            this.firebaseService.loginUser(this.loginForm.value.email, this.loginForm.value.password)
                .then(function (authData) {
                _this.loading.dismiss().then(function () {
                    _this.navCtrl.setRoot('TabsPage');
                });
            }, function (error) {
                _this.loading.dismiss().then(function () {
                    var alert = _this.alertCtrl.create({
                        title: 'Error',
                        message: error.message,
                        buttons: [
                            {
                                text: "Ok",
                                role: 'cancel'
                            }
                        ]
                    });
                    alert.present();
                });
            });
        }
    };
    LoginPage.prototype.goToSignup = function () {
        this.navCtrl.push('RegisterPage');
    };
    LoginPage.prototype.resetPassword = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Reset Password',
            message: 'Enter your email below',
            inputs: [
                {
                    name: 'email',
                    placeholder: 'My Email'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                },
                {
                    text: 'Reset',
                    handler: function (data) {
                        _this.firebaseService.resetPassword(data.email).then(function (data) {
                            console.log('reset: ', data);
                            _this.showBasicAlert('Success', 'Check your email for further instructions.');
                        })
                            .catch(function (err) {
                            _this.showBasicAlert('Error', err.message);
                        });
                    }
                }
            ]
        });
        prompt.present();
    };
    LoginPage.prototype.showBasicAlert = function (title, text) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    return LoginPage;
}());
LoginPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_5" /* Component */])({
        selector: 'page-login-page',template:/*ion-inline-start:"/home/prasoon/Ionic/shoppingApp/src/pages/login-page/login-page.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Log In\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]="loginForm" (submit)="loginUser()" novalidate>\n\n    <ion-item padding>\n      <ion-label floating>Email</ion-label>\n      <ion-input formControlName="email" type="email"\n        [class.invalid]="!loginForm.controls.email.valid && loginForm.controls.email.dirty"></ion-input>\n    </ion-item>\n    <ion-item class="error-message" \n      *ngIf="!loginForm.controls.email.valid  && loginForm.controls.email.dirty" no-lines>\n      <p>Please enter a valid email.</p>\n    </ion-item>\n\n    <ion-item padding>\n      <ion-label floating>Password</ion-label>\n      <ion-input formControlName="password" type="password"\n        [class.invalid]="!loginForm.controls.password.valid && loginForm.controls.password.dirty"></ion-input>\n    </ion-item>\n    <ion-item class="error-message" \n      *ngIf="!loginForm.controls.password.valid  && loginForm.controls.password.dirty" no-lines>\n      <p>Your password needs more than 6 characters.</p>\n    </ion-item>\n\n    <button ion-button block type="submit" [disabled]="!loginForm.valid">\n      Login\n    </button>\n\n  </form>\n\n  <button ion-button block clear (click)="goToSignup()">\n    Create a new account\n  </button>\n\n  <button ion-button block clear (click)="resetPassword()">\n    Reset password\n  </button>\n\n</ion-content>'/*ion-inline-end:"/home/prasoon/Ionic/shoppingApp/src/pages/login-page/login-page.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__providers_firebase_service__["a" /* FirebaseService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* FormBuilder */]])
], LoginPage);

//# sourceMappingURL=login-page.js.map

/***/ })

});
//# sourceMappingURL=1.main.js.map
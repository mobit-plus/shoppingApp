webpackJsonp([4],{

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_page__ = __webpack_require__(307);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilePageModule = (function () {
    function ProfilePageModule() {
    }
    return ProfilePageModule;
}());
ProfilePageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__profile_page__["a" /* ProfilePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile_page__["a" /* ProfilePage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__profile_page__["a" /* ProfilePage */]
        ]
    })
], ProfilePageModule);

//# sourceMappingURL=profile-page.module.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_firebase_service__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(108);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfilePage = (function () {
    function ProfilePage(navCtrl, firebaseService, formBuilder, toastCtrl) {
        this.navCtrl = navCtrl;
        this.firebaseService = firebaseService;
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        this.nameForm = formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(1), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required])]
        });
    }
    ProfilePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.firebaseService.authState.subscribe(function (user) {
            if (user) {
                _this.firebaseService.getUserData().subscribe(function (data) {
                    var value = data.name;
                    _this.nameForm.patchValue({ name: value });
                }, function (err) {
                    console.log('some err: ', err);
                });
                _this.invitations = _this.firebaseService.getUserInvitations();
            }
        });
    };
    ProfilePage.prototype.updateUser = function () {
        var _this = this;
        this.firebaseService.updateUserName(this.nameForm.value.name).then(function () {
            _this.presentToast('Name changed!');
        });
    };
    ProfilePage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 2000
        });
        toast.present();
    };
    ProfilePage.prototype.accepInvitation = function (invitation) {
        var _this = this;
        this.firebaseService.acceptInvitation(invitation).then(function () {
            _this.presentToast('Invitation accepted!');
        });
    };
    ProfilePage.prototype.discardInvitation = function (invitationId) {
        this.firebaseService.discardInvitation(invitationId);
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_5" /* Component */])({
        selector: 'page-profile-page',template:/*ion-inline-start:"/home/prasoon/Ionic/shoppingApp/src/pages/profile-page/profile-page.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <form [formGroup]="nameForm" (submit)="updateUser()" novalidate>\n\n    <ion-item padding>\n      <ion-label floating>Name</ion-label>\n      <ion-input formControlName="name" type="text"\n        [class.invalid]="!nameForm.controls.name.valid && nameForm.controls.name.dirty">\n      </ion-input>\n    </ion-item>\n    <ion-item class="error-message" \n      *ngIf="!nameForm.controls.name.valid && nameForm.controls.name.dirty" no-lines>\n      <p>Please provide a name</p>\n    </ion-item>\n\n    <button ion-button block type="submit" [disabled]="!nameForm.valid">\n      Update Account\n    </button>\n  </form>\n\n<h2 text-center>Invitations</h2>\n  <ion-list>\n    <ion-card *ngFor="let invitation of invitations | async">\n      <ion-card-header>{{ invitation.listName }}</ion-card-header>\n      <ion-card-content>Shared by: {{ invitation.fromEmail }}</ion-card-content>\n      <ion-row>\n        <ion-col>\n          <button ion-button icon-left clear (click)="accepInvitation(invitation)"><ion-icon name="checkmark"></ion-icon> Accept</button>\n        </ion-col>\n        <ion-col>\n          <button ion-button icon-left clear (click)="discardInvitation(invitation.$key)"><ion-icon name="close"></ion-icon> Discard</button>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/prasoon/Ionic/shoppingApp/src/pages/profile-page/profile-page.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__providers_firebase_service__["a" /* FirebaseService */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* ToastController */]])
], ProfilePage);

//# sourceMappingURL=profile-page.js.map

/***/ })

});
//# sourceMappingURL=4.main.js.map
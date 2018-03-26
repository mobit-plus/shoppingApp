webpackJsonp([5],{

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_page__ = __webpack_require__(305);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = (function () {
    function HomePageModule() {
    }
    return HomePageModule;
}());
HomePageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__home_page__["a" /* HomePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home_page__["a" /* HomePage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__home_page__["a" /* HomePage */]
        ]
    })
], HomePageModule);

//# sourceMappingURL=home-page.module.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_firebase_service__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(108);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl, firebaseService, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.firebaseService = firebaseService;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.editMode = false;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.firebaseService.authState.subscribe(function (user) {
            if (user) {
                _this.shoppingLists = _this.firebaseService.getUserLists();
            }
            else {
                _this.shoppingLists = null;
            }
        });
    };
    HomePage.prototype.logOut = function () {
        var _this = this;
        this.firebaseService.logoutUser().then(function () {
            _this.navCtrl.setRoot('LoginPage');
        });
    };
    HomePage.prototype.newList = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Create new Shopping List',
            message: 'Enter a name for your new list',
            inputs: [
                {
                    name: 'name',
                    placeholder: 'Groceries'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                },
                {
                    text: 'Create List',
                    handler: function (data) {
                        _this.firebaseService.createNewList(data.name).then(function (data) {
                            _this.presentToast('New list created!');
                        });
                    }
                }
            ]
        });
        prompt.present();
    };
    HomePage.prototype.removeList = function (id) {
        this.firebaseService.removeList(id);
    };
    HomePage.prototype.addItemToList = function (listId, listName) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'New item for "' + listName + '"',
            message: 'Enter a name for your new item',
            inputs: [
                {
                    name: 'name',
                    placeholder: 'Milk'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                },
                {
                    text: 'Add Item',
                    handler: function (data) {
                        _this.firebaseService.addListItem(listId, data.name).then(function (data) {
                            _this.presentToast('New item added!');
                        });
                    }
                }
            ]
        });
        prompt.present();
    };
    HomePage.prototype.removeItem = function (itemId, listId) {
        this.firebaseService.removeShoppingItem(listId, itemId);
    };
    HomePage.prototype.shareList = function (listId, listName) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Share your list "' + listName + '"',
            message: 'Enter the Email of the person you want to share your list with',
            inputs: [
                {
                    name: 'email',
                    placeholder: 'john@doe.com'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                },
                {
                    text: 'Share List',
                    handler: function (data) {
                        _this.firebaseService.shareList(listId, listName, data.email).then(function (res) {
                            _this.presentToast('Invitation sent to ' + data.email);
                        });
                    }
                }
            ]
        });
        prompt.present();
    };
    HomePage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 2000
        });
        toast.present();
    };
    return HomePage;
}());
HomePage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_5" /* Component */])({
        selector: 'page-home-page',template:/*ion-inline-start:"/home/prasoon/Ionic/shoppingApp/src/pages/home-page/home-page.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-buttons start>\n      <button ion-button icon-only (click)="logOut()">\n        <ion-icon name="log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>My Shopping List</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="editMode = !editMode">\n        <ion-icon name="reorder"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list *ngFor="let list of shoppingLists | async" padding-top>\n    <ion-list-header>\n      <button ion-button item-left clear color="danger" icon-only (click)="removeList(list.$key)" *ngIf="editMode"><ion-icon name="remove-circle"></ion-icon></button>\n      {{ list.name }}\n      <button ion-button item-right clear icon-only (click)="shareList(list.$key, list.name)"><ion-icon name="share"></ion-icon></button>\n      <button ion-button item-right clear icon-only (click)="addItemToList(list.$key, list.name)"><ion-icon name="add"></ion-icon></button>\n    </ion-list-header>\n\n    <ion-item-sliding *ngFor="let shoppingItem of list.shoppingItems | async">\n      <ion-item>\n        {{ shoppingItem.name }}\n      </ion-item>\n      <ion-item-options side="right">\n        <button ion-button color="danger" icon-only (click)="removeItem(shoppingItem.$key, list.$key)"><ion-icon name="trash"></ion-icon></button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-fab right bottom padding>\n    <button ion-fab (click)="newList()"><ion-icon name="add"></ion-icon></button>\n  </ion-fab>\n</ion-content>'/*ion-inline-end:"/home/prasoon/Ionic/shoppingApp/src/pages/home-page/home-page.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__providers_firebase_service__["a" /* FirebaseService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ToastController */]])
], HomePage);

//# sourceMappingURL=home-page.js.map

/***/ })

});
//# sourceMappingURL=5.main.js.map
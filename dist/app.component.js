"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.pageTitle = 'Example Product Management';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'pm-root',
            template: "\n        <nav class='navbar navbar-expand navbar-light bg-light'>\n            <a class='navbar-brand'>{{ pageTitle }}</a>\n            <ul class='nav nav-pills'>\n                <li><a class='nav-link' [routerLink]=\"['/welcome']\">Home</a></li>\n                <li><a class='nav-link' [routerLink]=\"['/products']\">Product List</a></li>\n            </ul>\n        </nav>\n        <div class='container'>\n            <router-outlet></router-outlet>\n        </div>\n    "
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

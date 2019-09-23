"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ProductService = /** @class */ (function () {
    function ProductService() {
    }
    ProductService.prototype.getProducts = function () {
        return [
            {
                "productId": 2,
                "productName": "Garden Cart",
                "productCode": "GDN-1234",
                "releaseDate": "March 18, 2019",
                "description": "Something something garden cart...",
                "price": 32.99,
                "starRating": 4.2,
                "imageUrl": "assets/images/garden_cart.jpg"
            },
            {
                "productId": 3,
                "productName": "Space Ship",
                "productCode": "GDN-9999",
                "releaseDate": "A long long time ago...",
                "description": "In a Galaxy far far away...",
                "price": 1000000,
                "starRating": 5,
                "imageUrl": "assests/images/death_star.jpg"
            },
        ];
    };
    ProductService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// import any needs
var core_1 = require("@angular/core");
var product_service_1 = require("./product.service");
// define metadata and specify a template for the component using a decorator
// encapsulating style sheets using styleUrls
var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(productService) {
        this.productService = productService;
        this.pageTitle = 'Product List';
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.showImage = false;
        this.products = [];
    }
    Object.defineProperty(ProductListComponent.prototype, "listFilter", {
        // When it's needed it will be got
        get: function () {
            return this._listFilter;
        },
        // when the user changes it, it will be changed
        set: function (value) {
            this._listFilter = value;
            this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
        },
        enumerable: true,
        configurable: true
    });
    // set type to void if your method doesn't return anything
    ProductListComponent.prototype.onRatingClicked = function (message) {
        this.pageTitle = 'Product List: ' + message;
    };
    ProductListComponent.prototype.performFilter = function (filterBy) {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter(function (product) {
            return product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1;
        });
    };
    // methods go down here
    ProductListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    // on init method
    ProductListComponent.prototype.ngOnInit = function () {
        this.products = this.productService.getProducts();
        this.filteredProducts = this.products;
    };
    ProductListComponent = __decorate([
        core_1.Component({
            templateUrl: './product-list.component.html',
            styleUrls: ['./product-list.component.css'],
        })
        // define a class
        ,
        __metadata("design:paramtypes", [product_service_1.ProductService])
    ], ProductListComponent);
    return ProductListComponent;
}());
exports.ProductListComponent = ProductListComponent;

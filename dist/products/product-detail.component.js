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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent(route, router) {
        this.route = route;
        this.router = router;
        this.pageTitle = 'Product Detail';
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var id = +this.route.snapshot.paramMap.get('id');
        this.pageTitle += ": " + id;
        this.product = {
            'productId': id,
            'productName': 'Leaf Rake',
            'productCode': 'GFN-0011',
            'releaseDate': 'March 19, 2019',
            'description': 'Leaf rake with 48-inch wooden handle.',
            'price': 19.95,
            'starRating': 3.2,
            'imageUrl': 'assets/images/leaf_rake.png'
        };
    };
    ProductDetailComponent.prototype.onBack = function () {
        this.router.navigate(['/products']);
    };
    ProductDetailComponent = __decorate([
        core_1.Component({
            templateUrl: './product-detail.component.html',
            styleUrls: ['./product-detail.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());
exports.ProductDetailComponent = ProductDetailComponent;

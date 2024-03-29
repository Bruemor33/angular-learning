"use strict";
// Feature Module
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var shared_module_1 = require("../shared/shared.module");
var product_list_component_1 = require("./product-list.component");
var product_detail_component_1 = require("./product-detail.component");
var convert_to_spaces_pipe_1 = require("../shared/convert-to-spaces.pipe");
var product_detail_guard_1 = require("./product-detail.guard");
var ProductModule = /** @class */ (function () {
    function ProductModule() {
    }
    ProductModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild([
                    { path: 'products', component: product_list_component_1.ProductListComponent },
                    {
                        path: 'products/:id',
                        canActivate: [product_detail_guard_1.ProductDetailGuard],
                        component: product_detail_component_1.ProductDetailComponent
                    }
                ]),
                shared_module_1.SharedModule
            ],
            declarations: [
                product_list_component_1.ProductListComponent,
                product_detail_component_1.ProductDetailComponent,
                convert_to_spaces_pipe_1.ConvertToSpacesPipe
            ]
        })
    ], ProductModule);
    return ProductModule;
}());
exports.ProductModule = ProductModule;

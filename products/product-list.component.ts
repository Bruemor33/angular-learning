// import any needs
import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

// define metadata and specify a template for the component using a decorator
// encapsulating style sheets using styleUrls
@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
})
// define a class
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;

    _listFilter: string;
    // When it's needed it will be got
    get listFilter(): string {
        return this._listFilter;
    }
    // when the user changes it, it will be changed
    set listFilter(value:string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filteredProducts: IProduct[];
    products: IProduct[] = [];

    constructor(private productService: ProductService) {}

    // set type to void if your method doesn't return anything
    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    // methods go down here
    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    // on init method
    ngOnInit(): void {
        this.products = this.productService.getProducts();
        this.filteredProducts = this.products;
    }
}
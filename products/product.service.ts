import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { IProduct } from './product';

@Injectable({
    providedIn: 'root'
})
export class ProductService{

    getProducts(): IProduct[] {
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
    }
    // location of your web server
    // private productUrl = 'api/products/products.json';

    // constructor(private http: HttpClient) {}

    // getProducts(): Observable<IProduct[]> {
    //     return this.http.get<IProduct[]>(this.productUrl).pipe(
    //         tap(data => console.log('All: ' + JSON.stringify(data))),
    //         catchError(this.handleError)
    //     );
    // }

    // private handleError(err: HttpErrorResponse) {
    //     let errorMessage = '',
    //     if (err.error instanceof ErrorEvent) {
    //         // a client side or network error occurred... handle it accordingly
    //         errorMessage = `An error occurred: ${err.error.message}`;
    //     } else {
    //         // the backend returned an unsuccessful response code
    //         // the response body may contain clues as to what went wrong
    //         errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    //     }
    //     console.error(errorMessage);
    //     return throwError(errorMessage);
    // }
}
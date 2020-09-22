import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable()

export class CommonService {
    url: string = "http://localhost:3000";
    headers = new HttpHeaders().set('Content-Type', 'application/json');

    constructor(private http: HttpClient) { }

    saveProduct(data) {
        let api_url = this.url + '/api/save_product_details';
        return this.http.post<product>(api_url, data, { headers: this.headers })
            .pipe(catchError(this.error))
    }

    searchProducts(product_search) {
        let api_url = this.url + '/api/product_search?product_search=' + product_search;
        return this.http.get<product[]>(api_url, { headers: this.headers })
            .pipe(catchError(this.error))
    }

    //Throw Error function
    error(error: HttpErrorResponse) {
        let error_message = '';
        if (error.error instanceof ErrorEvent) {
            error_message = error.error.message;
        }
        else {
            error_message = `Above error occurred. Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(error_message);
        return throwError(error_message);
    }
}

interface product {
    _id: string,
    product_id: number,
    product_name: string,
    quantity: number,
    cost_price: number,
    selling_price: number
}
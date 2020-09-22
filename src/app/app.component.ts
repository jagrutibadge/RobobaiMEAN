import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { CommonService } from './common.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'robobai';
    product_search: string = '';
    product_list: any = [];
    is_edit: boolean = true;
    current_id: string = null;
    submitted_invalid: boolean = false;

    productForm: FormGroup;

    constructor(private commonService: CommonService) {}

    ngOnInit() {
        this.productForm = new FormGroup({
            product_id: new FormControl(null, [
                Validators.required,
            ]),
            quantity: new FormControl(null, [
                Validators.required,
            ]),
            product_name: new FormControl(null, [
                Validators.required,
                Validators.pattern(/^[a-zA-Z ~!@#$%^&*()_+-/.{}[]|;:'"<>,?=]+$/)
            ]),
            cost_price: new FormControl(null, [
                Validators.required,
            ]),
            selling_price: new FormControl(null, [
                Validators.required,
                Validators.pattern(/^[0-9]+$/),
            ])
        });
    }

    saveProductDetails() {
        if(this.current_id)
            this.productForm.value._id = this.current_id;
        this.commonService.saveProduct(this.productForm.value)
        .subscribe(data => {
            this.productForm.reset();
            this.current_id = null;
            this.submitted_invalid = false;
        });
    }

    getSearchedProducts() {
        this.commonService.searchProducts(this.product_search)
        .subscribe(data => {
            this.product_list = data;
        });
    }

    selectProduct(selected_product) {
        this.current_id = selected_product.item._id;
        this.submitted_invalid = false;
        if(selected_product)
            this.productForm.reset(selected_product.item);
    }

    changeTab(is_edit) {
        this.is_edit = is_edit;
        this.productForm.reset();
        this.current_id = null;
        this.submitted_invalid = false;
    }

}

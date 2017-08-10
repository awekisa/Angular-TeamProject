import { Component } from '@angular/core';
import {ProductService} from '../products/product.service'

@Component({
    selector:'',
    template:`
    <h1>About us</h1>
    <h3>This is about us page and I am so glad you are looking at it</h3>
    <br>
    <h4 *ngIf="productsNumber">We have <strong><i>{{productsNumber}}</i></strong> products on our site from which you can choose!</h4>
    `
})

export class AboutUsComponent {
    productsNumber

    constructor(private productService: ProductService) {}

    ngOnInit(){
     this.productService.getAll().subscribe(res => {
           this.productsNumber = res.length
        } )

    }
}
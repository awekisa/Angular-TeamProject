import { Component, OnInit } from '@angular/core';

import { ProductService } from './product.service';

@Component({
  selector: 'product-table',
  templateUrl: './product-table.component.html'
})
export class ProductTableComponent implements OnInit { 
  products

  constructor (private productService: ProductService) {}

  ngOnInit () {
    this.productService
      .getAll()
      .subscribe(res => {
        this.products = res
      })
  }
}
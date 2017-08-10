import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ProductService } from './product.service';

@Component({
  selector: 'product-table',
  templateUrl: './product-table.component.html'
})
export class ProductTableComponent implements OnInit { 
  products
  @Output() editProductInfo = new EventEmitter<boolean>();
  @Output() deleteProductInfo = new EventEmitter<boolean>();

  constructor (private productService: ProductService) {}

  ngOnInit () {
    this.productService
      .getAll()
      .subscribe(res => {
        this.products = res
      })
  }

  editProduct (product) {
     this.editProductInfo.emit(product)
  }

  deleteProduct (product) {
    this.deleteProductInfo.emit(product)
  }
}
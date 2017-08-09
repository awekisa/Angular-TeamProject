import { Component, OnInit } from '@angular/core'
import { Product } from '../models/product.model'
import { ProductService } from './product.service'

@Component({
  selector: 'list-product',
  templateUrl: './list-product.component.html'
})
export class ListProductsComponent implements OnInit {
  products: Product[]

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getAll().subscribe(res => {
      this.products = res
    })
  }

}
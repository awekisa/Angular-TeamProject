import { Component } from '@angular/core'
import { Product } from '../models/product.model'
import { ProductService } from './product.service'


@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html'
})
export class AddProductComponent {
  product = new Product()

  constructor(private productService: ProductService) {}

  createProduct() {
    this.productService.create(this.product).subscribe(res => {
      console.log(res)
    })
  }

}
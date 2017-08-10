import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from './product.service';
import { CategoriesService } from '../categories/categories.service';

@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html'
})
export class AddProductComponent implements OnInit{
  product = new Product();
  categories;

  constructor(
    private productService: ProductService,
    private categoriesService: CategoriesService) {}

  ngOnInit () {
    this.categoriesService
      .all()
      .subscribe(res => {
        this.categories = res
      })
  }

  createProduct() {
    this.productService.create(this.product).subscribe(res => {
      console.log(res)
    })
  }

}
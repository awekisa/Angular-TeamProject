import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from './product.service';
import { CategoriesService } from '../categories/categories.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html'
})
export class AddProductComponent implements OnInit{
  product = new Product();
  categories;
  @Output() redirectToProducts = new EventEmitter<boolean>();

  constructor(
    private productService: ProductService,
    private categoriesService: CategoriesService,
    private toastr: ToastsManager) {}

  ngOnInit () {
    this.categoriesService
      .all()
      .subscribe(res => {
        this.categories = res

        if (res.length > 0) {
          this.product.category = res[0].name;
        }
      })
  }

  createProduct() {
    this.productService.create(this.product).subscribe(res => {
      if (res) {
        this.toastr.success('Product was created.');
        this.redirectToProducts.emit(true);
      } else {
        this.toastr.error('Failed to create product.')
      }
      
    })
  }

}
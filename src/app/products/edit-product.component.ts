import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from './product.service';
import { CategoriesService } from '../categories/categories.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'edit-product',
  templateUrl: './edit-product.component.html'
})
export class EditProductComponent implements OnInit {
  @Input() product;
  categories

  constructor (
    private productService: ProductService,
    private categoriesService: CategoriesService,
    private toastr: ToastsManager,
  ) { }

  ngOnInit () {
    this.categoriesService
      .all()
      .subscribe(res => {
        this.categories = res
      })
  }

  edit() {
    this.productService
      .edit(this.product)
      .subscribe((res) => {
        if(res) {
          // this.router.navigateByUrl('users/login')
          this.toastr.success('Product was edited.')
        } else {
          // let firstError = Object.keys(res.errors)[0]
          this.toastr.error('Failed to edit product')
        }
    })
  }
}
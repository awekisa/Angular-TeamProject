import { Component, Input } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from './product.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'delete-product',
  templateUrl: './delete-product.component.html'
})
export class DeleteProductComponent {
  @Input() product;

  constructor (
    private productService: ProductService,
    private toastr: ToastsManager,
  ) { }

  delete() {
    this.productService
      .delete(this.product._id)
      .subscribe((res) => {
        if(res) {
          // this.router.navigateByUrl('users/login')
          this.toastr.success('Product was deleted.')
        } else {
          // let firstError = Object.keys(res.errors)[0]
          this.toastr.error('Failed to delete product')
        }
    })
  }
}
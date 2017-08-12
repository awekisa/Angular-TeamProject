import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from './product.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'delete-product',
  templateUrl: './delete-product.component.html'
})
export class DeleteProductComponent {
  @Input() product;
  @Output() redirectToProducts = new EventEmitter<boolean>();

  constructor (
    private productService: ProductService,
    private toastr: ToastsManager,
  ) { }

  delete() {
    this.productService
      .delete(this.product._id)
      .subscribe((res) => {
        if(res) {
          this.redirectToProducts.emit(true);
          this.toastr.success('Product was deleted.');
        } else {
          this.toastr.error('Failed to delete product');
        }
    })
  }
}
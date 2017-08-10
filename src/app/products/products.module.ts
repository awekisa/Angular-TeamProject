import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ProductService } from './product.service';

import { AddProductComponent } from './add-product.component';
import { ListProductsComponent } from './list-product.component';
import { ProductTableComponent } from './product-table.component';

@NgModule({
  declarations: [AddProductComponent, ListProductsComponent, ProductTableComponent],
  providers: [ProductService],
  imports: [FormsModule, CommonModule],
  exports: [AddProductComponent, ProductTableComponent]
})
export class ProductModule { }